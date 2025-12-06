import { useContext } from "react";
import { BasketItem } from "./BasketItem";
import { DataContext } from "../../context/DataContext";

export const BasketPage = () => {

  const {setBasket, basket} = useContext(DataContext)

  const handleDelete = (id) => {
    setBasket(basket.filter(item => item.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Basket</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {basket.length == 0 ? (
          <p className="text-gray-500">Səbət boşdur...</p>
        ) : (
          basket.map(item => (
            <BasketItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};
