import axios from "axios";
import { DataContext } from "./context/DataContext";
import { AppRouter } from "./routers/AppRouter";
import { useEffect, useState } from "react";
import { getFromLocal, saveToLocal } from "./utils/localStorage";

export const App = () => {

  const [data, setData] = useState([]);
  const [basket, setBasket] = useState(getFromLocal({ key: "basket" }) || [])

    useEffect(() => {
        saveToLocal({ key: "basket", value: basket });
    }, [basket])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setData(res.data.products))
  }, []);

  return (
    <DataContext.Provider value={{ data, basket, setBasket }}>
      <AppRouter />
    </DataContext.Provider>
  );
};
