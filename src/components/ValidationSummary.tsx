import { AxiosError } from "axios";
import React from "react";
import Problem from "../types/problem";

type Props = {
  error: AxiosError<Problem>;
};

const ValidationSummary = ({ error }: Props) => {
  if (error.response?.status !== 400) return <></>;

  const errors = error.response.data.errors;

  return (
    <>
      <div className="text-danger mb-2">There are errors in the form: </div>
      {Object.entries(errors).map(([key, value]) => (
        <div className="mb-3" key={key}>
          <div>{key}</div>
          <ul>
            {value.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ValidationSummary;
