import { House } from "../types/house";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import config from "../config";

const useFetchHouses = () => {
  return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${config.baseApiUrl}/houses`).then((respo) => respo.data)
  );
};

export default useFetchHouses;
