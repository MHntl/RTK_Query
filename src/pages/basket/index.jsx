import millify from "millify";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../../components/CartList";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const [isModal, setIsModal] = useState(false);
  const data = useSelector((store) => store.basketSlice);
  const navigate = useNavigate();
  return (
    <div className="w-100 p-3">
      {data.totalAmount === 0 ? (
        <div className="d-flex mt-5 text-center flex-column">
          <h2>Your Cart is Empty!</h2>
          <p
            onClick={() => navigate("/")}
            className="text-primary fs-6 fw-bold underline"
          >
            Click Here to keep shopping!
          </p>
        </div>
      ) : (
        <div>
          {/* Ürün Listesi */}
          <div className="w-100">
            {data?.basketProducts?.map((item) => (
              <CartList item={item} />
            ))}
          </div>
          {/* TOTAL Amount */}
          <div className="d-flex flex-column align-items-end p-3">
            <p style={{ borderBottom: "red solid  3px ", width: "200px" }}></p>
          </div>
          <div className="m-5 mt-3 d-flex justify-content-between">
            <h3>Total Amount:</h3>
            <h3 className="text-danger">${millify(data.totalAmount)}</h3>
          </div>
          {/* ClearButton */}
          <div className="d-flex justify-content-center">
            <button
              disabled={data.totalAmount === 0}
              onClick={() => setIsModal((prev) => true)}
              className="btn btn-danger"
            >
              Clear All Product(s)
            </button>
          </div>
          {/* MODAL */}
          {isModal && (
            <div>
              <Modal setIsModal={setIsModal} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;
