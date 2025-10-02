import { createContext, useEffect, useState } from "react";
import axios from "axios";

let ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState([]);
  
   const [copyData,setCopyData]=useState([]);
  const [currentSort, setCurrentSort] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://68d62b7ac2a1754b4269b4cd.mockapi.io/Invoices"
        );
        setData(res.data);
        setCopyData(res.data)
        console.log("Data fetched from API successfully:", res.data);
      } catch (e) {
        console.log("Error in data fetching from API:", e);
      }
    };

    fetchData();
  }, []); 

  return (
    <ApiContext.Provider value={{ setCurrentSort, currentSort, data, setData ,setCopyData,copyData}}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
