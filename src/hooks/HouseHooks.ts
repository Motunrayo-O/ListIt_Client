import { House } from "../types/house";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import config from "../config";

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${config.baseApiUrl}/houses`).then((respo) => respo.data)
  );
};

const useFetchHouse = (id: number) => {
  return useQuery<House>(["house", id], () => 
    axios.get(`${config.baseApiUrl}/house/${id}`).then((respo) => respo.data)
  );
};

export default useFetchHouses;
export { useFetchHouse };
