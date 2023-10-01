
import React from "react";

type DataFetchProps = {status:"loading" | "success" | "error"}

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "loading") {
    return <h2>Data is loading ........</h2>;
  } else if (status === "error") {
    return <h2>Data is loading ........</h2>;
  }
  return (
    <div style={{ border: "2px solid red", margin: "1rem" }}>
      {/* <h2>Data is loading ........</h2> */}
      {/* <h2>Data is loading ........</h2> */}
      <h2>data fetched successfully</h2>
    </div>
  );
};

export default DataFetch;
