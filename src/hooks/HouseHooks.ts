import { House } from "../types/house";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import Problem from "../types/problem";

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

const useAddHouse = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<Problem>, House>(
    (house) => axios.post(`${config.baseApiUrl}/houses`, house),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("houses");
        navigate("/");
      },
    }
  );
};

const useUpdateHouse = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<Problem>, House>(
    (house) => axios.put(`${config.baseApiUrl}/houses`, house),
    {
      onSuccess: (_, house) => {
        queryClient.invalidateQueries("houses");
        navigate(`/house/${house.id}`);
      },
    }
  );
};

const useDeleteHouse = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, House>(
    (house) => axios.delete(`${config.baseApiUrl}/houses/${house.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("houses");
        navigate("/");
      },
    }
  );
};

export default useFetchHouses;
export { useFetchHouse, useAddHouse, useUpdateHouse, useDeleteHouse };
