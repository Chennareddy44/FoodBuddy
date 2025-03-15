import { useState } from "react";
import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");
  return (
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
            const data = filterData(searchInput, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        ) : (
          <p> No Restaurants Found</p>
        )}
      </div>
    </>
  );
};

export default Body;
