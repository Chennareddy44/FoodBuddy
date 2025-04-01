import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import userContext from "../utils/userContext";

const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants([]);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser } = useContext(userContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="p-5 bg-red-100 shadow-md">
            <div className="max-w-4xl mx-auto flex items-center gap-4">
              <input
                type="text"
                placeholder="Search for restaurants..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="font-extrabold w-full sm:w-80 p-3 border-2 border-red-300 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 placeholder:text-gray-500 placeholder:font-extrabold text-gray-800 transition-all duration-200 -ml-40"
              />
              <button
                onClick={() => {
                  const data = filterData(searchInput, allRestaurants);
                  setFilteredRestaurants(data);
                }}
                className="bg-red-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-500 active:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Search
              </button>
              <input
                className="border-2"
                value={user.name}
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>

          <div className="p-5 bg-red-50">
            <div className="max-w-7xl mx-auto">
              {filteredRestaurants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <Link
                      to={`/restaurant/${restaurant.info.id}`}
                      key={restaurant.info.id}
                      className="block"
                    >
                      <RestaurantCard {...restaurant.info} />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 text-lg font-semibold mt-10">
                  No Restaurants Found
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
