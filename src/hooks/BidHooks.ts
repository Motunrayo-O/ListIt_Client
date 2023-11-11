import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Bid } from "../types/bid";
import config from "../config";
import Problem from "../types/problem";

const useFetchBidsForHouse = (houseId: number) => {
  return useQuery<Bid[], AxiosError<Problem>>(["bids", houseId], () =>
    axios
      .get(`${config.baseApiUrl}/house/${houseId}/bids`)
      .then((res) => res.data)
  );
};

const useAddBid = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, Bid>(
    (bid) => axios.post(`${config.baseApiUrl}/house/${bid.houseId}/bids`, bid),
    {
      onSuccess: (_, bid) => {
        queryClient.invalidateQueries(["bids", bid.houseId]);
      },
    }
  );
};

export { useFetchBidsForHouse, useAddBid };
