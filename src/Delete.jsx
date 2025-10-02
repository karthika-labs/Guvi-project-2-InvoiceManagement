import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiContext from "./ApiContext";
import {  Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Delete({ invoiceId}) {
  const { data, setData } = useContext(ApiContext);
   const [showConfirm, setShowConfirm] = useState(false);

    const navigate = useNavigate();


  const handleDelete = async () => {
    console.log("Deleting invoice with ID:", invoiceId); 
    try {
      await axios.delete(
        `https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices/${invoiceId}`
      );
      console.log("Successfully deleted invoice", invoiceId);

      const copy = [...data];
      const index = copy.findIndex((item) => item.id === invoiceId);
      copy.splice(index, 1);
      setData(copy);
     
      setShowConfirm(false);
       navigate("/"); 
    } catch (e) {
      console.log("Error deleting invoice:", e);
    }
  };



  return (
    <>
       <div className="relative">
      <button
        onClick={() => setShowConfirm(true)}
        className="border-red-600 border-2 px-4 py-2 rounded  hover:text-white transition duration-300 ease-in hover:scale-110"
      >
        <Trash2 className="cursor-pointer text-red-500 hover:text-white transition duration-300 ease-in hover:scale-110" />
      </button>

      {showConfirm && (
        <div className="absolute top-12 -left-15 bg-white/40 p-4 rounded shadow-lg text-white w-64 z-50">
          <p className="mb-4">Are you sure you want to delete this invoice?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 rounded bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-700"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
export default Delete;
