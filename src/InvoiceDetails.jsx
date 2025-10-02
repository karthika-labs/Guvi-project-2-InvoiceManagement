import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ApiContext from "./ApiContext";
import Delete from "./Delete";
import axios from "axios";
import Edit from "./Edit";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";
import { Printer, Download, Trash2, Clock, CheckCircle } from "lucide-react";

function InvoiceDetails({
  handleForm,
  setIsEdit,
  isEdit,
  setShowForm,
  showForm,
}) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { data, setData, setCopyData, copyData, setCurrentSort } =
    useContext(ApiContext);

  useEffect(() => {
    const existing = data.find((inv) => inv.id === id);
    if (existing) {
      setItem(existing);
    } else {
      axios
        .get(`https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices/${id}`)
        .then((res) => setItem(res.data))
        .catch((err) => console.error("Error fetching invoice:", err));
    }
  }, [id, data]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const [day, month, year] = dateStr.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const handleStatus = async () => {
    const newStatus = item.status === "Paid" ? "Pending" : "Paid";
    try {
      const response = await axios.put(
        `https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices/${item.id}`,
        { ...item, status: newStatus }
      );
      setItem(response.data);
      setData((prev) =>
        prev.map((inv) =>
          inv.id === item.id ? { ...inv, status: newStatus } : inv
        )
      );
      setCopyData((prev) =>
        prev.map((inv) => (inv.id === id ? { ...inv, status: newStatus } : inv))
      );
      setCurrentSort("All");
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // pdf export replaces document.getElementById
  const invoiceRef = useRef(null);

  const handleDownloadPDF = async () => {
    if (!invoiceRef.current || !item) return;

    try {
      // Create a clone of the invoice DOM
      const clone = invoiceRef.current.cloneNode(true);

      // Apply PDF-specific styles
      clone.style.backgroundColor = "#ffffff";
      clone.style.color = "#000000";
      clone.style.width = `${invoiceRef.current.offsetWidth}px`;
      clone.style.padding = "1rem";
      clone.style.position = "fixed";
      clone.style.left = "-9999px";
      clone.style.top = "0";

      const statusDiv = clone.querySelector(".status-container");
      if (statusDiv) {
        const dot = statusDiv.querySelector("span:first-child");
        const text = statusDiv.querySelector("span:last-child");

        statusDiv.classList.remove("status-bg-paid", "status-bg-pending");

        statusDiv.style.setProperty(
          "background-color",
          "transparent",
          "important"
        );

        if (dot) dot.style.display = "none";

        if (text) {
          if (item.status === "Paid") {
            text.style.color = "#10b981";
          } else if (item.status === "Pending") {
            text.style.color = "#facc15";
          }
        }
      }

      // Optional: force colors for status & table
      clone
        .querySelectorAll(".status-bg-paid")
        .forEach(
          (el) => (el.style.backgroundColor = "rgba(16, 185, 129, 0.25)")
        );
      clone
        .querySelectorAll(".status-bg-pending")
        .forEach(
          (el) => (el.style.backgroundColor = "rgba(250, 204, 21, 0.25)")
        );
      clone
        .querySelectorAll(".status-dot-paid")
        .forEach((el) => (el.style.backgroundColor = "#10b981"));
      clone
        .querySelectorAll(".status-dot-pending")
        .forEach((el) => (el.style.backgroundColor = "#facc15"));
      clone
        .querySelectorAll(".table-subtotal")
        .forEach((el) => (el.style.color = "#facc15"));
      clone
        .querySelectorAll(".net-total-text")
        .forEach((el) => (el.style.color = "#10b981"));
      clone
        .querySelectorAll(".net-total-bg")
        .forEach(
          (el) => (el.style.backgroundColor = "rgba(134, 239, 172, 0.2)")
        );
      clone.querySelectorAll("thead tr th").forEach((el) => {
        el.style.backgroundColor = "#f3f4f6";
        el.style.color = "#000000";
      });
      clone.querySelectorAll("p").forEach((el) => {
        el.style.color = "#000000";
      });

      // Append clone offscreen

      document.body.appendChild(clone);

      // Render clone to canvas
      const canvas = await html2canvas(clone, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/png");

      // Create PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice-${item.invoiceNumber}.pdf`);

      // Remove clone
      document.body.removeChild(clone);
    } catch (e) {
      console.error("Error generating PDF:", e);
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
  });

  if (!item) return <div className="text-white p-6 righteous-regular">Loading invoice...</div>;
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
    <div className="fixed inset-0 z-50 righteous-regular bg-black/70 flex justify-center items-start overflow-auto">
      <div className="w-full min-h-screen bg-gray-900 text-white relative flex flex-col items-center py-10">
        {/*  Close */}
        <div className="w-full max-w-5xl flex items-center justify-end px-6">
          <hr className="border-t-2 border-purple-600 my-6 w-full" />

          <Link to="/" className="text-2xl hover:text-red-500">
            ✖
          </Link>
        </div>
        {/*  Action  */}
        <div className="w-full max-w-5xl flex justify-end gap-4 flex-wrap px-6 mt-6">
          <button
            onClick={() => handlePrint()}
            className="flex items-center justify-center gap-2 border-gray-400 border-2 px-4 py-2 rounded transition duration-300 ease-in hover:scale-105"
          >
            {" "}
            <span className="text-s font-bold  text-gray-400">Print</span>
            <Printer className="cursor-pointer text-purple-500 transition duration-300 ease-in hover:scale-110" />
          </button>
          <button
            onClick={() => handleDownloadPDF()}
            className=" px-4 py-2 rounded border-gray-400 border-2 hover:transition duration-300 ease-in hover:scale-105"
          >
            <Download className="cursor-pointer text-purple-500 transition duration-300 ease-in hover:scale-110" />
          </button>
          <Edit {...{ setShowForm, showForm, setIsEdit, isEdit, handleForm }} />
          <Delete invoiceId={item.id} />
          <button
            onClick={handleStatus}
            className={`px-4 py-2 rounded ${
              item.status === "Paid"
                ? "bg-yellow-700 hover:bg-yellow-800"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {item.status === "Paid" ? (
              <div className="flex items-center gap-2 cursor-pointer text-yellow-500">
                <Clock />
                <span className="text-white">Mark as Pending</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 cursor-pointer text-green-500">
                <CheckCircle />
                <span className="text-white">Mark as Paid</span>
              </div>
            )}
          </button>
        </div>
        {/* PDF export */}
        <div ref={invoiceRef} className="w-full max-w-5xl  pdf-safe">
          <h1 className="text-3xl font-bold px-6 mt-6 text-start text-color-invoice">
            Invoice Details
          </h1>
          {/* Avatar & Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1.5rem",
            }}
          >
            {item.avatar && (
              <img
                src={item.avatar}
                crossOrigin="anonymous"
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover avatar-border"
              />
            )}
            <div
              className={`flex items-center justify-center gap-2 px-3 py-1 rounded-full status-container ${
                item.status === "Paid" ? "status-bg-paid " : "status-bg-pending"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  item.status === "Paid"
                    ? "status-dot-paid"
                    : "status-dot-pending"
                }`}
              />
              <span
                className={` flex items-center status-text-${
                  item.status === "Paid" ? "paid " : "pending"
                } `}
              >
                {item.status}
              </span>
            </div>
          </div>
          {/*  Invoice details  */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-medium text-color-screen text-color-pdf">
                {item.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Invoice #</p>
              <p className="font-medium text-color-screen text-color-pdf">
                {item.invoiceNumber}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="font-medium text-color-screen text-color-pdf">
                {item.address}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-medium text-color-screen text-color-pdf">
                {item.date ? formatDate(item.date) : "N/A"}
              </p>
            </div>
          </div>

          {/* Table */}
          <div className=" mt-6 px-3 md:px-6 lg:px-6 pb-10">
            <table
              className="w-full   table-border"
              style={{ borderCollapse: "collapse" }}
            >
              <thead className="table-header">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Item</th>
                  <th className="px-4 py-2 text-center">Quantity</th>
                  <th className="px-4 py-2 text-center">Unit Rate</th>
                  <th className="px-4 py-2 text-center">Tax %</th>
                  <th className="px-4 py-2 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {item.items?.map((i, idx) => {
                  const subTotal =
                    Number(i.quantity || 0) *
                    Number(i.unitRate || 0) *
                    (1 + Number(i.tax || 0) / 100);
                  return (
                    <tr key={idx} className="table-border">
                      <td style={{ padding: "0.5rem 1rem" }}>{idx + 1}</td>
                      <td style={{ padding: "0.5rem 1rem" }}>{i.itemName}</td>
                      <td
                        style={{
                          padding: "0.5rem 1rem",
                          textAlign: "center",
                        }}
                      >
                        {i.quantity}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem 1rem",
                          textAlign: "center",
                        }}
                      >
                        {i.unitRate}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem 1rem",
                          textAlign: "center",
                        }}
                      >
                        {i.tax} %
                      </td>
                      <td
                        className="table-subtotal"
                        style={{ padding: "0.5rem 1rem", textAlign: "right" }}
                      >
                        ₹ {subTotal.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}

                <tr className="font-bold">
                  <td
                    colSpan={5}
                    className="net-total-bg"
                    style={{ padding: "0.5rem 1rem", textAlign: "right" }}
                  >
                    Net Total
                  </td>
                  <td
                    className="net-total-text"
                    style={{ padding: "0.5rem 1rem", textAlign: "right" }}
                  >
                    ₹{netTotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        ;
      </div>
    </div>
  );
}

export default InvoiceDetails;
{
  /* <div ref={invoiceRef}  className="w-full max-w-5xl  " 
  > */
}

{
  /*  Avatar , Status */
}
{
  /* <div className="w-full max-w-5xl flex items-center gap-8 px-6 mt-6">
            {item.avatar && (
              <img
                src={item.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover border border-gray-700 avatar-border"
              />
            )}
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                item.status === "Paid" ? "bg-green-800/40" : "bg-yellow-800/40"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  item.status === "Paid" ? "bg-green-500" : "bg-yellow-400"
                }`}
              />
              <span
                className={`font-bold ${
                  item.status === "Paid" ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div> */
}

{
  /*  Invoice details  */
}
{
  /* <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-medium">{item.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Invoice #</p>
              <p className="font-medium">{item.invoiceNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="font-medium">{item.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-medium">
                {item.date ? formatDate(item.date) : "N/A"}
              </p>
            </div>
          </div> */
}

{
  /*  Table centered, same width */
}
{
  /* {item.items?.length > 0 && (
            <div className="w-full max-w-5xl overflow-x-auto mt-6 px-6 pb-10">
              <table className="w-full border border-gray-700 rounded-lg">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Item</th>
                    <th className="px-4 py-2 text-center">Quantity</th>
                    <th className="px-4 py-2 text-center">Unit Rate</th>
                    <th className="px-4 py-2 text-center">Tax %</th>
                    <th className="px-4 py-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {item.items.map((i, idx) => {
                    const subTotal =
                      Number(i.quantity || 0) *
                      Number(i.unitRate || 0) *
                      (1 + Number(i.tax || 0) / 100);
                    return (
                      <tr key={idx} className="border-t border-gray-700">
                        <td className="px-4 py-2">{idx + 1}</td>
                        <td className="px-4 py-2">{i.itemName}</td>
                        <td className="px-4 py-2 text-center">{i.quantity}</td>
                        <td className="px-4 py-2 text-center">{i.unitRate}</td>
                        <td className="px-4 py-2 text-center">{i.tax} %</td>
                        <td className="px-4 py-2 text-right text-yellow-300">
                          ₹ {subTotal.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="border-t border-gray-700 font-bold">
                    <td
                      className="rounded bg-green-400/20 px-4 py-2 text-right"
                      colSpan={5}
                    >
                      Net Total
                    </td>
                    <td className="px-4 py-2 text-2xl text-right text-green-500 bg-green-400/20 ">
                      ₹{netTotal.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div> */
}

{
  /* <div className="w-full max-w-5xl  pdf-safe">
  <h1 className="text-3xl font-bold px-6 mt-6  ">Invoice Details</h1>
  {/* Avatar & Status */
}
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "2rem",
//       padding: "1.5rem",
//     }}
//   >
//     {item.avatar && (
//       <img
//         src={item.avatar}
//         crossOrigin="anonymous"
//         alt="Avatar"
//         className="w-16 h-16 rounded-full object-cover avatar-border"
//       />
//     )}
//     <div
//       className={`flex items-center justify-center gap-2 px-3 py-1 rounded-full ${
//         item.status === "Paid" ? "status-bg-paid" : "status-bg-pending"
//       }`}
//     >
//       <span
//         className={`w-3 h-3 rounded-full ${
//           item.status === "Paid" ? "status-dot-paid" : "status-dot-pending"
//         }`}
//       />
//       <span
//         className={` status-text-${
//           item.status === "Paid" ? "paid" : "pending"
//         }`}
//       >
//         {item.status}
//       </span>
//     </div>
//   </div>

//   {/* Table */}
//   <div className=" mt-6 px-3 md:px-6 lg:px-6 pb-10">
//     <table
//       className="w-full   table-border"
//       style={{ borderCollapse: "collapse" }}
//     >
//       <thead className="table-header">
//         <tr>
//           <th className="px-4 py-2 text-left">#</th>
//           <th className="px-4 py-2 text-left">Item</th>
//           <th className="px-4 py-2 text-center">Quantity</th>
//           <th className="px-4 py-2 text-center">Unit Rate</th>
//           <th className="px-4 py-2 text-center">Tax %</th>
//           <th className="px-4 py-2 text-right">Subtotal</th>
//         </tr>
//       </thead>
//       <tbody>
//         {item.items?.map((i, idx) => {
//           const subTotal =
//             Number(i.quantity || 0) *
//             Number(i.unitRate || 0) *
//             (1 + Number(i.tax || 0) / 100);
//           return (
//             <tr key={idx} className="table-border">
//               <td style={{ padding: "0.5rem 1rem" }}>{idx + 1}</td>
//               <td style={{ padding: "0.5rem 1rem" }}>{i.itemName}</td>
//               <td
//                 style={{
//                   padding: "0.5rem 1rem",
//                   textAlign: "center",
//                 }}
//               >
//                 {i.quantity}
//               </td>
//               <td
//                 style={{
//                   padding: "0.5rem 1rem",
//                   textAlign: "center",
//                 }}
//               >
//                 {i.unitRate}
//               </td>
//               <td
//                 style={{
//                   padding: "0.5rem 1rem",
//                   textAlign: "center",
//                 }}
//               >
//                 {i.tax} %
//               </td>
//               <td
//                 className="table-subtotal"
//                 style={{ padding: "0.5rem 1rem", textAlign: "right" }}
//               >
//                 ₹ {subTotal.toFixed(2)}
//               </td>
//             </tr>
//           );
//         })}
//         <tr className="font-bold">
//           <td
//             colSpan={5}
//             className="net-total-bg"
//             style={{ padding: "0.5rem 1rem", textAlign: "right" }}
//           >
//             Net Total
//           </td>
//           <td
//             className="net-total-text"
//             style={{ padding: "0.5rem 1rem", textAlign: "right" }}
//           >
//             ₹{netTotal.toFixed(2)}
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>; */}

//  <div ref={invoiceRef} className="w-full max-w-5xl bg-invoice ">
//           {/*  Avatar , Status */}
//           <div className="w-full max-w-5xl flex items-center gap-8 px-6 mt-6">
//             {item.avatar && (
//               <img
//                 src={item.avatar}
//                 alt="Avatar"
//                 className="w-16 h-16 rounded-full object-cover border border-gray-700 avatar-border"
//               />
//             )}
//             <div
//               className={`flex items-center gap-2 px-3 py-1 rounded-full ${
//                 item.status === "Paid" ? "bg-status-paid" : "bg-status-pending"
//               }`}
//             >
//               <span
//                 className={`w-3 h-3 rounded-full ${
//                   item.status === "Paid" ?  "status-dot-paid" : "status-dot-pending"
//                 }`}
//               />
//               <span
//                 className={`font-bold ${
//                   item.status === "Paid" ? "status-text-paid" : "status-text-pending"
//                 }`}
//               >
//                 {item.status}
//               </span>
//             </div>
//           </div>{" "}

//           {/*  Invoice details  */}
//           <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-4">
//             <div>
//               <p className="text-sm text-gray-400">Name</p>
//               <p className="font-medium">{item.name}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-400">Invoice #</p>
//               <p className="font-medium">{item.invoiceNumber}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-400">Address</p>
//               <p className="font-medium">{item.address}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-400">Date</p>
//               <p className="font-medium">
//                 {item.date ? formatDate(item.date) : "N/A"}
//               </p>
//             </div>
//           </div>{" "}

//           {/*  Table centered, same width */}
//           {item.items?.length > 0 && (
//             <div className="w-full max-w-5xl overflow-x-auto mt-6 px-6 pb-10">
//               <table className="w-full border border-gray-700 rounded-lg">
//                 <thead className="table-header">
//                   <tr >
//                     <th className="px-4 py-2 text-left">#</th>
//                     <th className="px-4 py-2 text-left">Item</th>
//                     <th className="px-4 py-2 text-center">Quantity</th>
//                     <th className="px-4 py-2 text-center">Unit Rate</th>
//                     <th className="px-4 py-2 text-center">Tax %</th>
//                     <th className="px-4 py-2 text-right">Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {item?.items?.map((i, idx) => {
//                     const subTotal =
//                       Number(i.quantity || 0) *
//                       Number(i.unitRate || 0) *
//                       (1 + Number(i.tax || 0) / 100);
//                     return (
//                       <tr key={idx} className="table-border">
//                         <td className="px-4 py-2">{idx + 1}</td>
//                         <td className="px-4 py-2">{i.itemName}</td>
//                         <td className="px-4 py-2 text-center">{i.quantity}</td>
//                         <td className="px-4 py-2 text-center">{i.unitRate}</td>
//                         <td className="px-4 py-2 text-center">{i.tax} %</td>
//                         <td className="px-4 py-2 text-right table-subtotal">
//                           ₹ {subTotal.toFixed(2)}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                   <tr className="border-t border-gray-700 font-bold">
//                     <td
//                       className="rounded net-total-bg px-4 py-2 text-right"
//                       colSpan={5}
//                     >
//                       Net Total
//                     </td>
//                     <td className="px-4 py-2 text-2xl text-right text-green-500 net-total-text ">
//                       ₹{netTotal.toFixed(2)}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>{" "}
