import React from "react";

const Footer = () => {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="w-100 bg-primary position-absolute bottom-0 d-flex justify-content-between text-white px-5 align-items-center">
      <p
        onClick={() => ScrollTop()}
        style={{ fontSize: "24px", cursor: "pointer" }}
      >
        RTKShop
      </p>
      <h5 className="d-none d-md-inline">Footer®</h5>
      <h6>Designed By: Muhammet Hantal</h6>
    </footer>
  );
};

export default Footer;
