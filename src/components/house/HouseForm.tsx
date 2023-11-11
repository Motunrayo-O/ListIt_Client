import { MouseEventHandler, useState } from "react";
import { House } from "../../types/house";
import { useNavigate } from "react-router-dom";
import toBase64 from "../../toBase64";

type Props = {
  house: House;
  onSubmit: (house: House) => void;
};

const HouseForm = ({ house, onSubmit }: Props) => {
  const [houseState, setHouseState] = useState({ ...house });
  const navigate = useNavigate();

  const onsubmitForm: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    onSubmit(houseState);
  };

  const onFileSelected = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    e.target.files &&
      e.target.files[0] &&
      setHouseState({
        ...houseState,
        photo: await toBase64(e.target.files[0]),
      });
  };

  return (
    <form className="mt-2">
      <div className="form-group mb-3">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={houseState.address}
          placeholder="Address"
          onChange={(event) =>
            setHouseState({ ...houseState, address: event.target.value })
          }
        ></input>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="form-control"
          id="country"
          value={houseState.country}
          placeholder="Country"
          onChange={(event) =>
            setHouseState({ ...houseState, country: event.target.value })
          }
        ></input>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={houseState.description}
          placeholder="Description"
          onChange={(event) =>
            setHouseState({ ...houseState, description: event.target.value })
          }
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={houseState.price}
          placeholder="price"
          onChange={(event) =>
            setHouseState({
              ...houseState,
              price: parseInt(event.target.value),
            })
          }
        ></input>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          placeholder="Upload photo"
          id="photo"
          className="form-control"
          onChange={onFileSelected}
        />
      </div>
      <div className="mt-2 mb-3">
        <img src={houseState.photo} alt="House" />
      </div>

      <div className="row">
        <button
          className="btn btn-primary col-1"
          disabled={!houseState.address || !houseState.price}
          onClick={onsubmitForm}
        >
          Submit
        </button>
        <button
          className="btn btn-secondary col-1"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default HouseForm;
