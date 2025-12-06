export const Card = ({product, handleBasket}) => {

  return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                {product.discountPercentage > 0 && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-gray-800 font-semibold text-lg mb-1 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-indigo-600 font-bold text-lg">
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                    {product.discountPercentage > 0 && (
                      <span className="text-gray-400 line-through text-sm ml-2">
                        ${product.price}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-yellow-500 text-sm">
                    ⭐ {product.rating.toFixed(1)}
                  </div>
                  <button onClick={()=>{handleBasket(product.id)}} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                    Add +
                  </button>
                </div>
              </div>
            </div>
  )
}
