import  Form  from "./Form"
import { useState } from "react"
import { Edit as EditIcon} from "lucide-react";

function Edit ({handleForm,setIsEdit,isEdit,  setShowForm,
                showForm}){
    const [form,setForm]=useState(false)
 
    
     const handleOpenForm = () => {
        setShowForm(true) //used to open form
    setIsEdit(true); // used to set edit or add form
    
    setForm(true);  
  };

    return(
        <>
        <button 
        onClick={()=>handleOpenForm()}
        className="border-2 border-gray-400 px-4 py-2 rounded hover:bg-purple-700 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
            <EditIcon className="cursor-pointer text-indigo-600 transition duration-300 ease-in-out hover:scale-110 hover:text-white" title="Edit" />
        </button>
        {
            form &&(
             <Form  handleForm={handleForm} setIsEdit={setIsEdit} isEdit={isEdit}  setShowForm={setShowForm}
                showForm={showForm}  ></Form>
            )
        }
        </>
    )
}
export default Edit