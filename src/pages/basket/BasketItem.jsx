export const BasketItem = ({ item, handleDelete }) => {
    return (
        <div className="flex items-center flex-col sm:flex-row gap-4  bg-white rounded-xl shadow-md p-4 mb-4">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
            />

            <div className=" flex-1">
                <h2 className="text-gray-800 font-semibold text-lg line-clamp-1">
                    {item.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-2">
                    {item.description}
                </p>

                <span className="text-indigo-600 font-bold text-md">
                    ${(
                        item.price -
                        (item.price * item.discountPercentage) / 100
                    ).toFixed(2)}
                </span>
            </div>

            <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
                Delete
            </button>
        </div>
    );
};
