import React from "react";
import { useFetchHouse, useUpdateHouse } from "../../hooks/HouseHooks";
import { useParams } from "react-router-dom";
import HouseForm from "./HouseForm";
import ApiStatus from "../../ApiStatus";
import ValidationSummary from "../ValidationSummary";

const EditHouse = () => {
  const { id } = useParams();

  if (!id) throw Error("House Id not supplied.");

  const { data, status, isSuccess } = useFetchHouse(parseInt(id));
  const updateMutation = useUpdateHouse();

  if (!isSuccess) return <ApiStatus status={status} />;

  return (
    <div>
      {updateMutation.isError && (
        <ValidationSummary error={updateMutation.error} />
      )}
      <HouseForm
        house={data}
        onSubmit={(h) => updateMutation.mutate(h)}
      ></HouseForm>
    </div>
  );
};

export default EditHouse;
