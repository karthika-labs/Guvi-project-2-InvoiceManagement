import ApiContext, { ApiContextProvider } from "./ApiContext";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Edit from "./Edit";
import { useContext, useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import axios from "axios";

function App() {
  const { data, setData, setCopyData, copyData } = useContext(ApiContext);
  const [isEdit, setIsEdit] = useState(false);

  const [showForm, setShowForm] = useState(false);

  // const [selectedInvoice, setSelectedInvoice] = useState(null);
  // const [view, setView] = useState(false);

  // // if status is applied in invoiceDetails.jsx
  // const updateInvoice = (updatedInvoice) => {
  //   setData(
  //     data.map((inv) => (inv.id === updatedInvoice.id ? updatedInvoice : inv))
  //   );
  //   setSelectedInvoice(updatedInvoice);
  // };

  const handleForm = async (newInvoice) => {
    if (!isEdit) {
      try {
        const newEntry = { ...newInvoice, status: "Pending" };
        const postData = await axios.post(
          `https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices`,
          newEntry
        );
        const apiInvoice = postData.data;
        setData([...data, apiInvoice]);
        console.log("Invoice added to API:", postData.data);
      } catch (error) {
        console.error("Failed to save invoice:", error);
      }
    } else {
      try {
        console.log("newInvoice",newInvoice)
        const updateData = await axios.put(
          `https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices/${newInvoice.id}`,

          newInvoice
        );
        setData(
          data.map((inv) =>
            inv.id === newInvoice.id ? updateData.data : inv
          )
        );

        setCopyData(
          copyData.map((inv) =>
            inv.id === newInvoice.id ? updateData.data : inv
          )
        );
        setShowForm(false)
        console.log("Invoice updated to API:", updateData.data);
      } catch (e) {
        console.error("Failed to update invoice:", e);
      }
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home  showForm={showForm} setShowForm={setShowForm}></Home>}></Route>
          <Route
            path="invoice"
            element={
              <Form
                handleForm={handleForm}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
                setShowForm={setShowForm}
                showForm={showForm}

              />
            }
          ></Route>
          <Route
            path="/invoice/:id"
            element={
              <InvoiceDetails
                handleForm={handleForm}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
                   setShowForm={setShowForm}
                showForm={showForm}
                 
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
