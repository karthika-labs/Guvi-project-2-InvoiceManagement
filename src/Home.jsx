// import { useContext, useState } from "react"
// import ApiContext from "./ApiContext"
// import Form from "./Form"
// function Home(){

//     const {data,setData}=useContext(ApiContext)
//     const [form,setForm]=useState(false)

//     let handleForm=()=>{

//     }
//     return(
//         <>
//         <div className="w-full min-h-screen">
//             <div className="max-w-6xl bg-pink-100 mx-auto  px-6 flex flex-col flex-wrap" >
//                 <header className="flex flex-wrap">
//                     <div>
//                         <h1>logo</h1>

//                     </div>

//                 </header>
//                 <main>
//                     <section className="flex  justify-between items-center flex-wrap">
//                           <div>Invoice + theme</div>
//                           <div className="flex justify-between gap-6 items-center flex-wrap">
//                             <div>SoryBy</div>
//                              <button onClick={()=>setForm(!form)}>Add new+</button>
//                           </div>
//                     </section>
//                     {
//                         form && (
//                            <Form handleForm={handleForm}></Form>
//                         )
//                     }
//                 </main>
//             </div>

//         </div>
//         </>
//     )
// }
// export default Home

import { useContext } from "react";
import ApiContext from "./ApiContext";
import SortBy from "./SortyBy";
import { Link, useNavigate } from "react-router-dom";

function Home({ setShowForm, showForm }) {
  const navigate = useNavigate();
  const { data } = useContext(ApiContext);

  const handleAddInvoice = () => {
    setShowForm(true);
    navigate("/invoice");
  };

  return (
    <div className="w-full righteous-regular min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col flex-wrap">
        <header className="flex justify-between items-center py-6 flex-wrap gap-4">
          <h1 className="text-3xl font-bold">Invoices</h1>
          <div className="flex gap-6 flex-wrap">
            <SortBy />
            <button
              onClick={handleAddInvoice}
              className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition"
            >
              <div className="bg-white text-purple-600 w-6 h-6 flex items-center justify-center rounded-full font-bold">
                +
              </div>
              Add New Invoice
            </button>
          </div>
        </header>

        <main className="mt-6 space-y-4">
          {data.length > 0 ? (
            data.map((item, index) => {
              const netTotal = item.items?.length
                ? item.items.reduce(
                    (acc, i) =>
                      acc +
                      Number(i.quantity || 0) *
                        Number(i.unitRate || 0) *
                        (1 + Number(i.tax || 0) / 100),
                    0
                  )
                : 0;

              return (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
                >
                  {/* Left section: avatar + basic info */}
                  <div className="flex items-center gap-4 flex-wrap">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-2">
                      
                      <p>
                        <strong className="text-purple-600">Invoice <span className="text-white">#</span></strong> <span >{item.invoiceNumber}</span>
                      </p>
                      <p>
                        <strong>Name:</strong> <span className="font-bold ">{item.name}</span>
                      </p>
                      <p>
                        <strong className="text-green-500">Total:</strong> <span className="text-xl">₹ {netTotal.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right section: status + view link */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                        item.status === "Paid"
                          ? "bg-green-800/40"
                          : "bg-yellow-800/40"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${
                          item.status === "Paid"
                            ? "bg-green-500"
                            : "bg-yellow-400"
                        }`}
                      ></span>
                      <span
                        className={`font-bold ${
                          item.status === "Paid"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <Link
                      to={`/invoice/${item.id}`}
                      className="bg-white text-purple-600 w-6 h-6 flex items-center justify-center rounded-full font-bold"
                    >
                      &gt;
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 text-center w-full">
              No invoices found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;

