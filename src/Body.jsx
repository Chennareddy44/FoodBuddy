import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

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
