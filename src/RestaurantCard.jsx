import { IMG_CDN_URL } from "./Constants";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  const imageUrl = `${IMG_CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="card">
      <img alt="Restaurant-logo" src={imageUrl}></img>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export default RestaurantCard;
