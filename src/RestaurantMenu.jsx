import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./Constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurant(resId);

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
      <div className="max-w-4xl mx-auto bg-red-200 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <h3 className="text-sm text-gray-600">{city}</h3>
          <h3 className="text-sm text-gray-600">{areaName}</h3>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold px-2 py-1 rounded-full text-white ${
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
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={`${name} logo`}
        />
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Menu</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                className="w-32 h-32 object-cover rounded-md mb-3"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800 truncate w-32">
                  {item?.card?.info?.name}
                </p>
                <p className="text-sm text-red-600 font-bold mt-1">
                  ₹{item?.card?.info?.price / 100}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
