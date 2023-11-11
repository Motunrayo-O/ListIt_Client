import React, { useState } from "react";
import { House } from "../../types/house";
import { useAddBid, useFetchBidsForHouse } from "../../hooks/BidHooks";
import { Bid } from "../../types/bid";
import ApiStatus from "../../ApiStatus";
import { currencyFormatter } from "../../config";

type Props = {
  house: House;
};

const Bids = ({ house }: Props) => {
  const { data, isSuccess, status } = useFetchBidsForHouse(house.id);
  console.log("data", JSON.stringify(data, null, 2));
  const addBidMutation = useAddBid();

  const emptyBid: Bid = {
    id: 0,
    houseId: house.id,
    amount: 0,
    bidder: "",
  };

  const [bid, setBid] = useState<Bid>(emptyBid);
  if (!isSuccess) return <ApiStatus status={status} />;

  const onSubmit = () => {
    addBidMutation.mutate(bid);
    setBid(emptyBid);
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((b) => (
                  <tr key={b.id}>
                    <td>{b.bidder}</td>
                    <td>{currencyFormatter.format(b.amount)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <input
            id="bidder"
            className="h-100"
            type="text"
            value={bid.bidder}
            onChange={(e) => setBid({ ...bid, bidder: e.target.value })}
            placeholder="Bidder"
          ></input>
        </div>
        <div className="col-4">
          <input
            id="amount"
            className="h-100"
            type="number"
            value={bid.amount}
            onChange={(e) =>
              setBid({ ...bid, amount: parseInt(e.target.value) })
            }
            placeholder="Amount"
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={() => onSubmit()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Bids;
