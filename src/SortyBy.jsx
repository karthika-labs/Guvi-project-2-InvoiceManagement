import { useContext, useEffect } from "react";
import ApiContext from "./ApiContext";
import { useFormik } from "formik";

function SortBy() {
  const { data, setData ,copyData,currentSort,setCurrentSort} = useContext(ApiContext); 
   const formik = useFormik({
    initialValues: {
      sortBy: currentSort,
    },
     enableReinitialize: true,
  });


  
  const handleChange = (e) => {
    const value = e.target.value;
    formik.setFieldValue("sortBy", value);
    setCurrentSort(value);
    let filtered = [];

    if (value === "Paid") {
      filtered = copyData.filter((inv) => inv.status === "Paid");
    } else if (value === "Pending") {
      filtered = copyData.filter((inv) => inv.status === "Pending");
    } else if (value === "All") {
      filtered = copyData; 
    }

    setData(filtered);
  };

  useEffect(()=>{


    if(formik.values.sortBy){
      handleChange({target:{value:formik.values.sortBy}})
    }
   
  },[copyData,formik.values.sortBy])


 


  return (
    <select
      name="sortBy"
      value={formik.values.sortBy}
      onChange={handleChange}
      className="px-3 py-2 rounded bg-gray-800 text-white"
    >
      <option value="" disabled>
        Sort By
      </option>
      <option value="Pending">Pending</option>
      <option value="Paid">Paid</option>
      <option value="All">All</option>
    </select>
  );
}

export default SortBy;
