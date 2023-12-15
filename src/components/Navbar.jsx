import React, { useReducer } from "react";
import { BsCart2 } from "react-icons/bs";
import { COLORS } from "../utils/constant";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const basketQuantity = useSelector((store) => store.basketSlice.itemCount);
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary w-100"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RTKShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex justify-content-between"
          id="navbarNav"
        >
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          {/* SEARCH */}
          <div className="position-relative">
            <form
              className="d-flex align-items-center"
              style={{ width: "380px" }}
              role="search"
            >
              <input
                style={{ color: "black" }}
                className="form-control me-2 bg-light"
                type="search"
                aria-label="Search"
              />
              <CiSearch className="fs-2 searchIcon position-absolute top-50 end-0 me-3 d-lg-flex d-md-none translate-middle-y " />
            </form>
          </div>
          {/* ICONS */}
          <div className="d-flex gap-3  align-items-center">
            <FaUserAlt style={{ fontSize: "24px", color: COLORS.color1 }} />
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/basket")}
            >
              {basketQuantity === 0 ? (
                <BsCart2 style={{ fontSize: "24px", color: COLORS.color1 }} />
              ) : (
                <BsCartFill
                  style={{ fontSize: "24px", color: COLORS.color1 }}
                />
              )}
              <span
                style={{ borderRadius: "50%" }}
                className=" bg-danger px-1 text-white text-center align-items-center"
              >
                {basketQuantity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
