import { restaurantList } from "./Constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  );
};

export default Body;
