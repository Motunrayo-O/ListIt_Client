import { House } from "../../types/house";
import useFetchHouses from "../../hooks/HouseHooks";

const HouseList = () => {
  const { data: houses } = useFetchHouses();

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
              //   <tr key={d.id} onClick={() => navigate(`/house/${d.id}`)}>
              <tr key={d.id}>
                <td>{d.address}</td>
                <td>{d.country}</td>
                {/* <td>{d.currencyFormatter.format(d.price)}</td> */}
                <td>{d.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Link className="btn btn-primary" to="/house/add">
        Add
      </Link> */}
    </>
  );
};

export default HouseList;
