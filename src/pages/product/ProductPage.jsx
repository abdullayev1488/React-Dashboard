import React, { useContext, useEffect } from "react";
import { Card } from "../../components/custom/Card/Card";
import { DataContext } from "../../context/DataContext";

export const ProductPage = ({ query }) => {

  const { data, basket, setBasket } = useContext(DataContext)

  const handleBasket = (id) => {
    const findEl = data.find(item => item.id == id);

    const exists = basket.some(item => item.id == id);
    if (exists) return;
    setBasket(prev => ([{ ...findEl, count: 1 }, ...prev]));
  };


  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])



  return (
    <div className="bg-gray-100 flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Products
      </h1>

      <div className="flex-1 overflow-y-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4">
          {data
            .filter((product) => product.title.toLowerCase().startsWith(query.trim().toLowerCase()))
            .map((product) => (
              <Card key={product.id} product={product} handleBasket={handleBasket} />
            ))}
        </div>
      </div>
    </div>
  );
};