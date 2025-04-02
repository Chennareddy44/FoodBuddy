import { useState, useContext } from "react";
import userContext from "../utils/userContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(userContext);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const removeItem = (index) => {
    setLoadingIndex(index);
    setTimeout(() => {
      const updatedCart = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCart);
      setLoadingIndex(null);
    }, 500);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-10">
      <h1 className="text-white text-4xl font-bold mb-6 text-center">
        Your Cart 🛒
      </h1>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-lg p-5 mb-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            <img
              className="w-20 h-20 object-cover rounded-lg shadow-md border border-gray-200 mr-4"
              src={item.imageId}
              alt={item.name}
            />
            <div className="flex-1 text-xl font-semibold text-gray-900">
              {item.name}
            </div>
            <div className="text-xl font-bold text-gray-800">₹{item.price}</div>

            <button
              onClick={() => removeItem(index)}
              className="ml-4 flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg font-bold shadow-md transition-all duration-300 hover:bg-red-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
              disabled={loadingIndex === index}
            >
              {loadingIndex === index ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <span>Remove</span>
              )}
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-center text-2xl font-semibold bg-white p-4 rounded-lg shadow-md">
          Your cart is so empty, even Dana White couldn’t hype it up! 🤣
        </h1>
      )}

      {cartItems.length > 0 && (
        <div className="flex justify-between items-center text-3xl font-semibold mt-6 bg-white p-5 rounded-xl shadow-lg">
          <span>Total:</span>
          <span className="text-red-500">
            ₹
            {cartItems
              .reduce((total, item) => total + parseFloat(item.price), 0)
              .toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
