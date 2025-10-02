// // import { useFormik } from "formik";
// // import { useState } from "react";

// // function InvoiceForm({ handleForm }) {
// //   const [toast, setToast] = useState(false);

// //   const formik = useFormik({
// //     initialValues: {
// //       name: "",
// //       address: "",
// //       invoiceNumber: "",
// //       date: "",
// //       description: "",
// //       quantity: "",
// //       unitRate: "",
// //       amount: "",
// //     },
// //     validate: (values) => {
// //       const errors = {};
// //       if (!values.name) errors.name = "Name is required";
// //       if (!values.address) errors.address = "Address is required";
// //       if (!values.invoiceNumber) errors.invoiceNumber = "Invoice Number is required";
// //       if (!values.date) errors.date = "Date is required";
// //       if (!values.quantity) errors.quantity = "Quantity is required";
// //       if (!values.unitRate) errors.unitRate = "Unit Rate is required";
// //       if (!values.amount) errors.amount = "Amount is required";
// //       return errors;
// //     },
// //     onSubmit: (values, { resetForm }) => {
// //       handleForm(values);
// //       setToast(true);
// //       setTimeout(() => setToast(false), 3000);
// //       resetForm();
// //     },
// //   });

// //   return (
// //     <div className="relative w-full max-w-lg mx-auto p-6">
// //       {/* Toast */}
// //       {toast && (
// //         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
// //           Invoice added successfully!
// //         </div>
// //       )}

// //       {/* Form */}
// //       <form
// //         onSubmit={formik.handleSubmit}
// //         className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
// //       >
// //         {/* Name */}
// //         <div cl>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Name
// //           </label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formik.values.name}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Customer Name"
// //           />
// //           {formik.errors.name && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
// //           )}
// //         </div>

// //         {/* Address */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Address
// //           </label>
// //           <input
// //             type="text"
// //             name="address"
// //             value={formik.values.address}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Customer Address"
// //           />
// //           {formik.errors.address && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
// //           )}
// //         </div>

// //         {/* Invoice Number */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Invoice Number
// //           </label>
// //           <input
// //             type="text"
// //             name="invoiceNumber"
// //             value={formik.values.invoiceNumber}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Invoice #"
// //           />
// //           {formik.errors.invoiceNumber && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.invoiceNumber}</p>
// //           )}
// //         </div>

// //         {/* Date */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Date
// //           </label>
// //           <input
// //             type="date"
// //             name="date"
// //             value={formik.values.date}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //           />
// //           {formik.errors.date && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.date}</p>
// //           )}
// //         </div>

// //         {/* Description / Notes */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Description
// //           </label>
// //           <textarea
// //             name="description"
// //             value={formik.values.description}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Invoice description or notes"
// //           />
// //         </div>

// //         {/* Quantity */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Quantity
// //           </label>
// //           <input
// //             type="number"
// //             name="quantity"
// //             value={formik.values.quantity}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Quantity"
// //           />
// //           {formik.errors.quantity && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.quantity}</p>
// //           )}
// //         </div>

// //         {/* Unit Rate */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Unit Rate
// //           </label>
// //           <input
// //             type="number"
// //             name="unitRate"
// //             value={formik.values.unitRate}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Unit rate"
// //           />
// //           {formik.errors.unitRate && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.unitRate}</p>
// //           )}
// //         </div>

// //         {/* Amount */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
// //             Amount
// //           </label>
// //           <input
// //             type="number"
// //             name="amount"
// //             value={formik.values.amount}
// //             onChange={formik.handleChange}
// //             className="w-full mt-1 p-2 border text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Total amount"
// //           />
// //           {formik.errors.amount && (
// //             <p className="text-red-500 text-xs mt-1">{formik.errors.amount}</p>
// //           )}
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex gap-4 mt-4">
// //           <button
// //             type="submit"
// //             className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
// //           >
// //             ➕ Add Invoice
// //           </button>
// //           <button
// //     type="button"
// //     onClick={() => formik.resetForm()}
// //     className="flex items-center justify-center flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
// //   >
// //     {/* Trash icon SVG */}
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       strokeWidth={2}
// //       stroke="currentColor"
// //       className="w-5 h-5 text-red-500"
// //     >
// //       <path
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79a2.25 2.25 0 0 1 2.244 2.077l.46 10.88a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077l.46-10.88A2.25 2.25 0 0 1 8.084 5.79h10.076zM9 5.79V4.873c0-1.18.91-2.164 2.09-2.201a51.964 51.964 0 0 1 3.32 0c1.18.037 2.09 1.022 2.09 2.201v.916"
// //       />
// //     </svg>
// //   </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default InvoiceForm;

// import { useFormik } from "formik";
// import { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import ApiContext from "./ApiContext";
// function Form({ handleForm, setIsEdit, isEdit, setShowForm, showForm }) {
//   console.log("shoeForm",showForm)
//   // console.log("isEdit",isEdit)

//   const { data, setdata } = useContext(ApiContext);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const existingData = data.find((inv) => inv.id === id);
//   const [quantity, setQuantity] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [netTotal, setNetTotal] = useState();
//   // console.log("data",data)
//   //  console.log("existing",existingData)

//   const [toast, setToast] = useState(false);
//   const [lineItems, setLineItems] = useState(false);
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues:
//       isEdit && existingData
//         ? {
//             id: existingData?.id,
//             name: existingData.name || "",
//             address: existingData.address || "",
//             invoiceNumber: existingData.invoiceNumber || "",
//             date: existingData.date || "",
//             description: existingData.description || "",
//             items: [
//               {
//                 itemName: existingData.quantity || "",
//                 quantity: existingData.quantity || "",
//                 unitRate: existingData.unitRate || "",
//                 tax: existingData.tax || "",
//               },
//             ],
//           }
//         : {
//             name: "",
//             address: "",
//             invoiceNumber: "",
//             date: "",
//             description: "",

//             items: [
             
//             ],
//           },
//     validate: (values) => {
//       const errors = {};
//       if (!values.name) errors.name = "Name is required";
//       if (!values.address) errors.address = "Address is required";
//       if (!values.invoiceNumber)
//         errors.invoiceNumber = "Invoice Number is required";
//       if (!values.date) errors.date = "Date is required";
     
//       return errors;
//     },
//     onSubmit: (values) => {
//       console.log("Submitting form:", values);
//       handleForm({ ...existingData, ...values });
//       setToast(true);
//       setTimeout(() => setToast(false), 3000);
//     },
//   });

//   const handleCancel = () => {
    
//     formik.resetForm({ values: existingData });
//     setIsEdit(false);
//     setShowForm(false);
//   };

//   const handleFormClose = () => {
//     if (isEdit) {
//       setShowForm(false);
//       setIsEdit(false);
//     } else navigate("/");
//   };

//   const netTot = formik.values.items.reduce((acc, item) => {
//     return (
//       acc +
//       Number(item.quantity) *
//         Number(item.unitRate) *
//         (1 + Number(item.tax) / 100)
//     );
//   }, 0);

//   return (
//     <>
//       {showForm && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-start overflow-auto">
//           <div className="bg-gray-900  w-full min-h-screen">
//           <form
//             onSubmit={formik.handleSubmit}
//             className="bg-gray-900 text-white max-w-5xl mx-auto my-0 p-8 rounded-xl shadow space-y-6 relative overflow-auto"
//           >
//             <button
//               onClick={() => handleFormClose()}
//               type="button"
//               className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400"
//             >
//               ✖
//             </button>

//             <h2 className="text-2xl font-bold mb-6 text-purple-500">
//               {isEdit ? "Edit Invoice" : "Add New Invoice"}
//             </h2>

//             <div className="flex items-center gap-4">
//               <label className="w-40 text-sm font-medium text-purple-500">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                 placeholder="Customer Name"
//               />
//               {formik.errors.name && (
//                 <p className="text-red-500 text-xs ml-2">
//                   {formik.errors.name}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-40 text-sm font-medium text-purple-500">
//                 Address:
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formik.values.address}
//                 onChange={formik.handleChange}
//                 className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                 placeholder="Customer Address"
//               />
//               {formik.errors.address && (
//                 <p className="text-red-500 text-xs ml-2">
//                   {formik.errors.address}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-40 text-sm font-medium text-purple-500">
//                 Invoice Number:
//               </label>
//               <input
//                 type="text"
//                 name="invoiceNumber"
//                 value={formik.values.invoiceNumber}
//                 onChange={formik.handleChange}
//                 className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                 placeholder="Invoice #"
//               />
//               {formik.errors.invoiceNumber && (
//                 <p className="text-red-500 text-xs ml-2">
//                   {formik.errors.invoiceNumber}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-40 text-sm font-medium text-purple-500">
//                 Date:
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formik.values.date}
//                 onChange={formik.handleChange}
//                 className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//               />
//               {formik.errors.date && (
//                 <p className="text-red-500 text-xs ml-2">
//                   {formik.errors.date}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center gap-4">
//               <label className="w-40 text-sm font-medium text-purple-500">
//                 Description:
//               </label>
//               <textarea
//                 name="description"
//                 value={formik.values.description}
//                 onChange={formik.handleChange}
//                 className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                 placeholder="Invoice description or notes"
//               />
//             </div>

//             {/* new */}
            

            
//               <div>
//                 {formik.values.items.map((item, index) => {
//                   const itemSubTotal =
//                     Number(item.quantity) *
//                     Number(item.unitRate) *
//                     (1 + Number(item.tax) / 100);
//                   return (
//                     <div key={index} className="flex gap-2 flex-wrap">
//                       {/* Item Name */}
//                       <div className="flex items-center ">
//                         <label className="w-40 text-sm font-medium text-purple-500">
//                           Item:
//                         </label>
//                         <input
//                           type="text"
//                           name={`items[${index}].itemName`}
//                           value={item.itemName}
//                           onChange={formik.handleChange}
//                           className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                           placeholder="Enter item"
//                         />
//                       </div>

//                       {/* Quantity */}
//                       <div className="flex gap-2 items-center justify-center">
//                         <div className="flex items-center">
//                           <label className="w-40 text-sm font-medium text-purple-500">
//                             Quantity:
//                           </label>
//                         </div>
//                         <button
//                           type="button"
//                           onClick={() => {
//                             if (item.quantity > 0) {
//                               formik.setFieldValue(
//                                 `items[${index}].quantity`,
//                                 Number(item.quantity) - 1
//                               );
//                             }
//                           }}
//                           className="px-2 bg-gray-700 rounded"
//                         >
//                           -
//                         </button>
//                         <div className="px-4">{item.quantity}</div>
//                         <button
//                           type="button"
//                           onClick={() => {
//                             formik.setFieldValue(
//                               `items[${index}].quantity`,
//                               Number(item.quantity) + 1
//                             );
//                           }}
//                           className="px-2 bg-gray-700 rounded"
//                         >
//                           +
//                         </button>
//                       </div>

//                       {/* Unit Rate */}
//                       <div className="flex items-center ">
//                         <label className="w-40 text-sm font-medium text-purple-500">
//                           Unit Rate:
//                         </label>
//                         <input
//                           type="number"
//                           name={`items[${index}].unitRate`}
//                           value={item.unitRate}
//                           onChange={formik.handleChange}
//                           className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                           placeholder="Unit Rate"
//                         />
//                       </div>

//                       {/* Tax */}
//                       <div className="flex items-center ">
//                         <label className="w-40 text-sm font-medium text-purple-500">
//                           Tax:
//                         </label>
//                         <input
//                           type="number"
//                           name={`items[${index}].tax`}
//                           value={item.tax}
//                           onChange={formik.handleChange}
//                           className="flex-1 p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                           placeholder="Tax %"
//                         />
//                       </div>

//                       {/* Sub Total */}

//                       <div className="flex items-center">
//                         <label className="w-40 text-sm font-medium text-purple-500">
//                           Sub Total:
//                         </label>

//                         <div className="flex-1">{itemSubTotal.toFixed(2)}</div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => {
                          
//                            formik.values.items.splice(index, 1)
//                             formik.setFieldValue('items', [...formik.values.items]);
//                         }}
//                       >
//                         close
//                       </button>
//                     </div>
//                   );
//                 })}

//                 <div className="flex items-center ">
//                   <label className="w-40 text-sm font-medium text-purple-500">
//                     Net Total:
//                   </label>
//                   {netTot.toFixed(2)}
//                 </div>
//               </div>

//               <button
//               type="button"
//               onClick={() => {
//                 formik.setFieldValue("items", [
//                   ...formik.values.items,
//                   {
//                     itemName: "",
//                     quantity: 0,
//                     unitRate: "",
//                     tax: "",
//                   },
//                 ]);
                
//               }}
//             >
//               Add items
//             </button>
            

//             {/* end */}

//             {/* Buttons */}
//             <div className="flex gap-4 mt-6 justify-end">
//               <button
//                 type="submit"
//                 className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
//               >
//                 {isEdit ? "💾 Save chnaces" : "➕ Add Invoice"}
//               </button>
//               {isEdit && (
//                 <button
//                   onClick={() => handleCancel()}
//                   className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
//                 >
//                   Cancel
//                 </button>
//               )}
//               { !isEdit && (<button
//                 type="button"
//                 onClick={() => formik.resetForm()}
//                 className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
//               >
//                 {/* Trash icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-red-500 inline-block"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79a2.25 2.25 0 0 1 2.244 2.077l.46 10.88a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077l.46-10.88A2.25 2.25 0 0 1 8.084 5.79h10.076zM9 5.79V4.873c0-1.18.91-2.164 2.09-2.201a51.964 51.964 0 0 1 3.32 0c1.18.037 2.09 1.022 2.09 2.201v.916"
//                   />
//                 </svg>
//               </button>)
//               }
//             </div>
//             {toast && (
//               <div
//                 id="toast-top-right"
//                 className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg left-1/4 -top-2 sm:left-1 lg:-top-2 left-1 dark:text-gray-400 z-50"
//                 role="alert"
//               >
//                 <div
//                   id="toast-success"
//                   className="flex items-center w-full max-w-xs mb-4 text-gray-500 shadow-sm border-2 border-purple-500 rounded-lg shadow-sm bg-gray-100 lg:bg-white"
//                   role="alert"
//                 >
//                   <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 rounded-lg dark:text-green-400">
//                     <svg
//                       className="w-5 h-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                     </svg>
//                     <span className="sr-only">Check icon</span>
//                   </div>
//                   <div className="ms-3 text-sm font-normal">
//                     {isEdit
//                       ? "Invoice updated successfully!"
//                       : "Invoice added successfully!"}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Form;


// import { useFormik } from "formik";
// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import ApiContext from "./ApiContext";

// function Form({ handleForm, setIsEdit, isEdit, setShowForm, showForm }) {
//   const { data } = useContext(ApiContext);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const existingData = data.find((inv) => inv.id === id);
//   const [toast, setToast] = useState(false);

//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues:
//       isEdit && existingData
//         ? {
//             id: existingData?.id,
//             invoiceNumber: existingData.invoiceNumber || "",
//             name: existingData.name || "",
//             date: existingData.date || "",
//             address: existingData.address || "",
//             description: existingData.description || "",
//             items:
//               existingData.items?.length > 0
//                 ? existingData.items
//                 : [],
//           }
//         : {
//             invoiceNumber: "",
//             name: "",
//             date: "",
//             address: "",
//             description: "",
//             items: [],
//           },
//     validate: (values) => {
//       const errors = {};
//       if (!values.invoiceNumber) errors.invoiceNumber = "Invoice Number is required";
//       if (!values.name) errors.name = "Name is required";
//       if (!values.date) errors.date = "Date is required";
//       if (!values.address) errors.address = "Address is required";
//       return errors;
//     },
//     onSubmit: (values) => {
//       handleForm({ ...existingData, ...values });
//       setToast(true);
//       setTimeout(() => setToast(false), 3000);
//     },
//   });

//   const handleCancel = () => {
//     formik.resetForm({ values: existingData });
//     setIsEdit(false);
//     setShowForm(false);
//   };

//   const handleFormClose = () => {
//     if (isEdit) {
//       setShowForm(false);
//       setIsEdit(false);
//     } else navigate("/");
//   };

//   const netTotal = formik.values.items.reduce((acc, item) => {
//     return acc + Number(item.quantity) * Number(item.unitRate) * (1 + Number(item.tax) / 100);
//   }, 0);

//   return (
//     <>
//       {showForm && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-start overflow-auto">
//           <div className="bg-gray-900 w-full h-full p-4">
//             <form
//               onSubmit={formik.handleSubmit}
//               className="bg-gray-900 text-white max-w-6xl mx-auto my-4 p-8 rounded-xl shadow space-y-6 relative overflow-auto"
//             >
//               {/* Close  */}
//               <button
//                 onClick={handleFormClose}
//                 type="button"
//                 className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400"
//               >
//                 ✖
//               </button>

//               <h2 className="text-2xl font-bold mb-6 text-purple-500">
//                 {isEdit ? "Edit Invoice" : "Add New Invoice"}
//               </h2>

              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 {/* Invoice Number */}
//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium text-purple-500 mb-1">Invoice #</label>
//                   <input
//                     type="text"
//                     name="invoiceNumber"
//                     value={formik.values.invoiceNumber}
//                     onChange={formik.handleChange}
//                     className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                     placeholder="Invoice Number"
//                   />
//                   {formik.errors.invoiceNumber && (
//                     <p className="text-red-500 text-xs mt-1">{formik.errors.invoiceNumber}</p>
//                   )}
//                 </div>

//                 {/* Customer Name */}
//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium text-purple-500 mb-1">Customer Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                     placeholder="Customer Name"
//                   />
//                   {formik.errors.name && (
//                     <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
//                   )}
//                 </div>

//                 {/* Date */}
//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium text-purple-500 mb-1">Date</label>
//                   <input
//                     type="date"
//                     name="date"
//                     value={formik.values.date}
//                     onChange={formik.handleChange}
//                     className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                   />
//                   {formik.errors.date && (
//                     <p className="text-red-500 text-xs mt-1">{formik.errors.date}</p>
//                   )}
//                 </div>

//                 {/* Customer Address */}
//                 <div className="flex flex-col">
//                   <label className="text-sm font-medium text-purple-500 mb-1">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formik.values.address}
//                     onChange={formik.handleChange}
//                     className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                     placeholder="Customer Address"
//                   />
//                   {formik.errors.address && (
//                     <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
//                   )}
//                 </div>

//                 {/* Description */}
//                 <div className="flex flex-col md:col-span-2 w-1/2">
//                   <label className="text-sm font-medium text-purple-500 mb-1">Description</label>
//                   <textarea
//                     name="description"
//                     value={formik.values.description}
//                     onChange={formik.handleChange}
//                     className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                     placeholder="Short description"
//                     rows={2}
//                   />
//                 </div>
//               </div>

//               {/* Items Table (hidden initially) */}
              
//               {formik.values.items.length > 0 && (
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full text-white border border-gray-700">
//                     <thead>
//                       <tr className="bg-gray-800">
//                         <th className="px-4 py-2 border">Item</th>
//                         <th className="px-4 py-2 border">Quantity</th>
//                         <th className="px-4 py-2 border">Unit Rate</th>
//                         <th className="px-4 py-2 border">Tax %</th>
//                         <th className="px-4 py-2 border">Sub Total</th>
//                         <th className="px-4 py-2 border">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {formik.values.items.map((item, index) => {
//                         const subTotal =
//                           Number(item.quantity) *
//                           Number(item.unitRate) *
//                           (1 + Number(item.tax) / 100);
//                         return (
//                           <tr key={index} className="border-t border-gray-700">
//                             <td className="p-2 border">
//                               <input
//                                 type="text"
//                                 name={`items[${index}].itemName`}
//                                 value={item.itemName}
//                                 onChange={formik.handleChange}
//                                 className="w-full p-1 border rounded bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                                 placeholder="Item Name"
//                               />
//                             </td>
//                             <td className="p-2 border flex items-center justify-center gap-1">
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   formik.setFieldValue(
//                                     `items[${index}].quantity`,
//                                     Math.max(0, Number(item.quantity) - 1)
//                                   )
//                                 }
//                                 className="px-2 bg-gray-700 rounded"
//                               >
//                                 -
//                               </button>
//                               <span>{item.quantity}</span>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   formik.setFieldValue(
//                                     `items[${index}].quantity`,
//                                     Number(item.quantity) + 1
//                                   )
//                                 }
//                                 className="px-2 bg-gray-700 rounded"
//                               >
//                                 +
//                               </button>
//                             </td>
//                             <td className="p-2 border">
//                               <input
//                                 type="number"
//                                 name={`items[${index}].unitRate`}
//                                 value={item.unitRate}
//                                 onChange={formik.handleChange}
//                                 className="w-full p-1 border rounded bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                               />
//                             </td>
//                             <td className="p-2 border">
//                               <input
//                                 type="number"
//                                 name={`items[${index}].tax`}
//                                 value={item.tax}
//                                 onChange={formik.handleChange}
//                                 className="w-full p-1 border rounded bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
//                               />
//                             </td>
//                             <td className="p-2 border text-center">{subTotal.toFixed(2)}</td>
//                             <td className="p-2 border text-center">
//                               <button
//                                 type="button"
//                                 onClick={() => {
//                                   formik.values.items.splice(index, 1);
//                                   formik.setFieldValue("items", [...formik.values.items]);
//                                 }}
//                                 className="px-2 py-1 bg-red-600 rounded hover:bg-red-700"
//                               >
//                                 ✖
//                               </button>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                     <tfoot>
//                       <tr>
//                         <td colSpan={4} className="text-right px-4 py-2 font-medium">
//                           Net Total:
//                         </td>
//                         <td className="px-4 py-2 font-bold text-center">{netTotal.toFixed(2)}</td>
//                         <td></td>
//                       </tr>
//                     </tfoot>
//                   </table>
//                 </div>
//               )}

//               {/* Add Item Button */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   formik.setFieldValue("items", [
//                     ...formik.values.items,
//                     { itemName: "", quantity: 0, unitRate: "", tax: "" },
//                   ])
//                 }
//                 className="mt-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
//               >
//                 ➕ Add Item
//               </button>

//               {/* Buttons */}
//               <div className="flex gap-4 mt-6 justify-end">
//                 <button
//                   type="submit"
//                   className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
//                 >
//                   {isEdit ? "💾 Save Changes" : "➕ Add Invoice"}
//                 </button>
//                 {isEdit && (
//                   <button
//                     onClick={handleCancel}
//                     className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
//                   >
//                     Cancel
//                   </button>
//                 )}
//                 {!isEdit && (
//                   <button
//                     type="button"
//                     onClick={() => formik.resetForm()}
//                     className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
//                   >
//                      {/* Trash icon  */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                    fill="none"
//                    viewBox="0 0 24 24"
//                    strokeWidth={2}
//                    stroke="currentColor"
//                    className="w-5 h-5 text-red-500 inline-block"
//                  >
//                    <path
//                    strokeLinecap="round"
//                      strokeLinejoin="round"
//                      d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79a2.25 2.25 0 0 1 2.244 2.077l.46 10.88a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077l.46-10.88A2.25 2.25 0 0 1 8.084 5.79h10.076zM9 5.79V4.873c0-1.18.91-2.164 2.09-2.201a51.964 51.964 0 0 1 3.32 0c1.18.037 2.09 1.022 2.09 2.201v.916"
//                    />
//                </svg>
//                   </button>
//                 )}
//               </div>

//               {/* Toast */}
//               {toast && (
//                 <div
//                   id="toast-top-right"
//                   className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg left-1/4 -top-2 sm:left-1 lg:-top-2 left-1 dark:text-gray-400 z-50"
//                   role="alert"
//                 >
//                   <div
//                     id="toast-success"
//                     className="flex items-center w-full max-w-xs mb-4 text-gray-500 shadow-sm border-2 border-purple-500 rounded-lg shadow-sm bg-gray-100 lg:bg-white"
//                     role="alert"
//                   >
//                     <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 rounded-lg dark:text-green-400">
//                       <svg
//                         className="w-5 h-5"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                       </svg>
//                       <span className="sr-only">Check icon</span>
//                     </div>
//                     <div className="ms-3 text-sm font-normal">
//                       {isEdit ? "Invoice updated successfully!" : "Invoice added successfully!"}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Form;




import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiContext from "./ApiContext";

function Form({ handleForm, setIsEdit, isEdit, setShowForm, showForm }) {
  const { data } = useContext(ApiContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const existingData = data.find((inv) => inv.id === id);
  const [toast, setToast] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      isEdit && existingData
        ? {
            id: existingData?.id,
            invoiceNumber: existingData.invoiceNumber || "",
            name: existingData.name || "",
            date: existingData.date || "",
            address: existingData.address || "",
            description: existingData.description || "",
            items: existingData.items?.length > 0 ? existingData.items : [],
          }
        : {
            invoiceNumber: "",
            name: "",
            date: "",
            address: "",
            description: "",
            items: [],
          },
    validate: (values) => {
      const errors = {};
      if (!values.invoiceNumber) errors.invoiceNumber = "Invoice Number is required";
      if (!values.name) errors.name = "Name is required";
      if (!values.date) errors.date = "Date is required";
      if (!values.address) errors.address = "Address is required";
      return errors;
    },
    onSubmit: (values) => {
      handleForm({ ...existingData, ...values });
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    },
  });

  const handleCancel = () => {
    formik.resetForm({ values: existingData });
    setIsEdit(false);
    setShowForm(false);
  };

  const handleFormClose = () => {
    if (isEdit) {
      setShowForm(false);
      setIsEdit(false);
    } else navigate("/");
  };

  const netTotal = formik.values.items.reduce(
    (acc, item) => acc + Number(item.quantity) * Number(item.unitRate) * (1 + Number(item.tax) / 100),
    0
  );

  return (
    <>
      {showForm && (
        <div className="fixed righteous-regular inset-0 z-50 bg-black/70 flex justify-center items-start overflow-auto">
          <div className="bg-gray-900 w-full min-h-screen p-4">
            <form
              onSubmit={formik.handleSubmit}
              className="bg-gray-900 text-white max-w-7xl mx-auto my-4 p-8 rounded-xl shadow space-y-6 relative overflow-auto"
            >
              {/* Close button */}
              <button
                onClick={handleFormClose}
                type="button"
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold mb-6 text-purple-500">
                {isEdit ? "Edit Invoice" : "Add New Invoice"}
              </h2>

              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-purple-500 mb-1">Invoice #</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    value={formik.values.invoiceNumber}
                    onChange={formik.handleChange}
                    className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="Invoice Number"
                  />
                  {formik.errors.invoiceNumber && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.invoiceNumber}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-purple-500 mb-1">Customer Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="Customer Name"
                  />
                  {formik.errors.name && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-purple-500 mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
                  />
                  {formik.errors.date && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.date}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-purple-500 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="Customer Address"
                  />
                  {formik.errors.address && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
                  )}
                </div>

                {/* Description smaller */}
                <div className="flex flex-col md:col-span-2 w-1/2">
                  <label className="text-sm font-medium text-purple-500 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className="p-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="Short description"
                    rows={2}
                  />
                </div>
              </div>

              {/* Items Table (hidden initially) */}
{formik.values.items.length > 0 && (
  <div className="mt-4 ">
    {/* Table Head */}
    <div className="hidden tracking-wide  md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-2 items-center justify-between text-white/80 text-sm mb-2 px-2">
      <div  className=" font-bold">Item Name</div>
      <div className="text-center font-bold">Quantity</div>
      <div className="text-center font-bold">Unit Rate</div>
      <div className="text-center font-bold">Tax %</div>
      <div className="text-center font-bold">Sub Total</div>
       <div className="text-center font-bold">Action</div>
      <div></div>
    </div>

    {/* Items Rows */}
    {formik.values.items.map((item, index) => {
      const itemSubTotal =
        Number(item.quantity) * Number(item.unitRate) * (1 + Number(item.tax) / 100);

      return (
        <div
          key={index}
           className="flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-4 bg-gray-800 p-3 rounded mb-3"
        >
          {/* Item Name */}
          <input
            type="text"
            name={`items[${index}].itemName`}
            value={item.itemName}
            onChange={formik.handleChange}
            className="p-2 border rounded bg-gray-700 text-white text-center md:text-left w-full md:w-auto"
            placeholder="Item Name"
          />

          {/* Quantity */}
          <div className="flex items-center justify-between md:justify-center gap-2 w-full">
            <button
              type="button"
              onClick={() => {
                if (item.quantity > 0)
                  formik.setFieldValue(`items[${index}].quantity`, Number(item.quantity) - 1);
              }}
              className="px-2 bg-gray-600 rounded"
            >
              -
            </button>
            <div className="w-8 text-center">{item.quantity}</div>
            <button
              type="button"
              onClick={() =>
                formik.setFieldValue(`items[${index}].quantity`, Number(item.quantity) + 1)
              }
              className="px-2 bg-gray-600 rounded"
            >
              +
            </button>
          </div>

          {/* Unit Rate */}
          <input
            type="number"
            name={`items[${index}].unitRate`}
            value={item.unitRate}
            onChange={formik.handleChange}
            className="p-2 border rounded bg-gray-700 text-white text-center w-full "
            placeholder="Unit Rate"
          />

          {/* Tax */}
          <input
            type="number"
            name={`items[${index}].tax`}
            value={item.tax}
            onChange={formik.handleChange}
            className="p-2 border rounded bg-gray-700 text-white text-center w-full "
            placeholder="Tax %"
          />

          {/* Sub Total */}
          <div className="text-center w-full md:w-auto"> ₹ {itemSubTotal.toFixed(2)}</div>

          {/* Remove button */}
          <button
            type="button"
            onClick={() => {
              formik.values.items.splice(index, 1);
              formik.setFieldValue("items", [...formik.values.items]);
            }}
            className="text-red-500 cursor-pointer flex items-center justify-center hover:text-red-700 w-full md:w-auto font-bold px-2 py-1 rounded "
            

          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          </button>
        </div>
      );
    })}

    {/* Net Total */}
    <div className="flex justify-end mt-2 gap-2 text-white font-semibold">
      <span className="text-green-500 flex items-center justify-center rounded bg-green-500/20 px-2">Net Total:</span> <span className="text-green-300 text-3xl"> ₹ {netTotal.toFixed(2)}</span>
    </div>
  </div>
)}



              {/* Add Item Button */}
              <button
                type="button"
                onClick={() =>
                  formik.setFieldValue("items", [
                    ...formik.values.items,
                    { itemName: "", quantity: 0, unitRate: "", tax: "" },
                  ])
                }
                className="mt-4 px-4 py-2 border-purple-600  border  flex gap-2 bg-white/30 rounded hover:bg-white/70 hover:text-purple-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 Add Item
              </button>

              {/* Form Buttons */}
              <div className="flex gap-4 mt-6 justify-end">
                <button
                  type="submit"
                  className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
                >
                  {isEdit ? "💾 Save Changes" : "➕ Add Invoice"}
                </button>
                {isEdit && (
                  <button
                    onClick={handleCancel}
                    className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Cancel
                  </button>
                )}
                {!isEdit && (
                  <button
                    type="button"
                    onClick={() => formik.resetForm()}
                    className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
                  >
                   {/* Trash icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                   stroke="currentColor"
                   className="w-5 h-5 text-red-500 inline-block"
                 >
                   <path
                     strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9M18.16 5.79a2.25 2.25 0 0 1 2.244 2.077l.46 10.88a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077l.46-10.88A2.25 2.25 0 0 1 8.084 5.79h10.076zM9 5.79V4.873c0-1.18.91-2.164 2.09-2.201a51.964 51.964 0 0 1 3.32 0c1.18.037 2.09 1.022 2.09 2.201v.916"
                  />
               </svg>
                  </button>
                )}
              </div>

              {/* Toast */}
              {toast && (
                <div
                  className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg left-1/4 -top-2 z-50"
                  role="alert"
                >
                  <div className="flex items-center w-full max-w-xs mb-4 text-gray-500 shadow-sm border-2 border-purple-500 rounded-lg shadow-sm bg-gray-100 lg:bg-white">
                    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 rounded-lg">
                      ✔
                    </div>
                    <div className="ms-3 text-sm font-normal">
                      {isEdit ? "Invoice updated successfully!" : "Invoice added successfully!"}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;


