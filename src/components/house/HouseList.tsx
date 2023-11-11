import { House } from "../../types/house";
import useFetchHouses from "../../hooks/HouseHooks";
import { currencyFormatter } from "../../config";
import ApiStatus from "../../ApiStatus";
import { Link, useNavigate } from "react-router-dom";

const HouseList = () => {
  const navigate = useNavigate();
  const { data: houses, status, isSuccess } = useFetchHouses();

  if (!isSuccess) return <ApiStatus status={status} />;

  return (
    <>
      <div className="row mb-5">
        <h5 className="themeFontColour text-centet">
          Houses currently for sale
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {houses &&
            houses.map((d: House) => (
              <tr key={d.id} onClick={() => navigate(`/house/${d.id}`)}>
                <td>{d.address}</td>
                <td>{d.country}</td>
                <td>{currencyFormatter.format(d.price)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/house/add">
        Add
      </Link>
    </>
  );
};

export default HouseList;
