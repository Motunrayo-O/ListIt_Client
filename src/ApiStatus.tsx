import React from "react";

type Props = {
  status: "idle" | "success" | "error" | "loading";
};

const ApiStatus = ({ status }: Props) => {
  switch (status) {
    case "error":
      return <div>Error contacting the server</div>;
    case "idle":
      return <div>Idle..</div>;
    case "loading":
      return <div>Loading...</div>;
    default:
      throw Error("Invalid api status");
  }
};

export default ApiStatus;
