import { IMG_CDN_URL } from "./Constants";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const imageUrl = `${IMG_CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="w-72 h-[22rem] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        alt={`${name} logo`}
        src={imageUrl}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>
        <h3 className="text-sm text-gray-600 mt-1 line-clamp-2">
          {cuisines?.join(", ")}
        </h3>
        <div className="flex items-center mt-2">
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
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600" />
    </div>
  );
};

export default RestaurantCard;
