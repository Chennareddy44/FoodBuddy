import { useState, useContext } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./Constants";
import useRestaurant from "../utils/useRestaurant";
import userContext from "../utils/userContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurant(resId);
  const { cartItems, setCartItems } = useContext(userContext);
  const [loadingItem, setLoadingItem] = useState(null);

  if (restaurantData === null) return <Shimmer />;

  const {
    name,
    city,
    areaName,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
  } = restaurantData?.data?.cards[2]?.card?.card.info || {};

  const menuItems =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card.itemCards || [];

  if (!menuItems || menuItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-gray-600 text-xl font-semibold">
          No menu items available
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:shadow-2xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <h3 className="text-sm text-gray-600">{city}</h3>
          <h3 className="text-sm text-gray-600">{areaName}</h3>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full text-white ${
                avgRating >= 4
                  ? "bg-green-500"
                  : avgRating >= 3
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {avgRating} ★
            </span>
            <span className="text-sm text-gray-600">{costForTwoMessage}</span>
          </div>
        </div>
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-lg shadow-md border-2 border-gray-200 transform hover:scale-105 transition-transform"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={`${name} logo`}
        />
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🍽 Menu
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center transition-shadow duration-300 hover:shadow-xl transform hover:scale-105"
            >
              <img
                className="w-36 h-36 object-cover rounded-lg shadow-md mb-3 border border-gray-300"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800 truncate w-36">
                  {item?.card?.info?.name}
                </p>
                <p className="text-md text-red-600 font-bold mt-1">
                  ₹{item?.card?.info?.price / 100}
                </p>

                <button
                  className="flex items-center justify-center gap-2 font-semibold bg-red-500 text-white py-2 px-6 mt-3 rounded-lg cursor-pointer w-full max-w-[160px] transition-all duration-300 hover:bg-red-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => {
                    setLoadingItem(item?.card?.info?.id);
                    setTimeout(() => {
                      setCartItems([
                        ...cartItems,
                        {
                          name: item?.card?.info?.name,
                          imageId: IMG_CDN_URL + item?.card?.info?.imageId,
                          price: item?.card?.info?.price / 100,
                        },
                      ]);
                      setLoadingItem(null);
                    }, 500);
                  }}
                  disabled={loadingItem === item?.card?.info?.id}
                >
                  {loadingItem === item?.card?.info?.id ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <>
                      <span>Add To Cart</span>
                    </>
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
