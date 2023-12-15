import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex mt-5 justify-content-center">
      <div
        className="spinner-border"
        style={{ width: "54px", height: "54px" }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
