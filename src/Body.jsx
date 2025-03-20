import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search the restaurant"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            ></input>
            <button
              className="search-button"
              onClick={() => {
                const data = filterData(searchInput, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>
          <div className="restaurant-list">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurant/" + restaurant.info.id}
                    key={restaurant.info.id}
                  >
                    <RestaurantCard {...restaurant.info} />
                  </Link>
                );
              })
            ) : (
              <p> No Restaurants Found</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
