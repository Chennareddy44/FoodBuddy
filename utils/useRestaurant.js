import { useState, useEffect } from "react";
import { LIST_API_URL } from "../src/Constants";

const useRestaurant = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(`${LIST_API_URL}${resId}`);

    const json = await response.json();

    setRestaurantData(json);
  }

  return restaurantData;
};

export default useRestaurant;
