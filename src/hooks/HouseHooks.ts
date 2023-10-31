import { useEffect, useState } from "react";
import { House } from "../types/house";
import config from "../config";

const useFetchHouses = (): House[] => {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(`${config.baseApiUrl}/houses`);
        const houses = await response.json();
        setHouses(houses);
      } catch (err) {
        console.log("[MO]" + err);
      }
    };
    fetchHouses();
  }, []);

  return houses;
};

export default useFetchHouses;
