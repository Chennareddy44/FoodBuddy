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
  } = restaurantData?.data?.cards[2]?.card?.card.info;

  const menuItems =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card.itemCards;

  if (!menuItems || menuItems.length === 0) {
    return (
      <div>
        <h1>No menu items available</h1>
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="restaurant-info">
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
        <h3>{city}</h3>
        <h3>{areaName}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="menu-items">
        <h1>Menu</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item?.card?.info?.id}>
              <img
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt="Food Item Image"
              />
              <div>
                <p>{item?.card?.info?.name}</p>
                <p>Rs {item?.card.info.price / 100}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
