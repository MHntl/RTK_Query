import millify from "millify";
import React, { useState } from "react";
import Modal from "../components/Modal";
import QuantityButtons from "../components/QuantityButtons";

const CartList = ({ item }) => {
  const [isProductModal, setIsProductModal] = useState(false);
  return (
    <div className=" m-3 pt-3 w-100 pb-1 border-2 px-5 d-flex flex-row border-bottom gap-3 align-items-center justify-content-between">
      <img
        style={{ width: "75px", height: "100px", objectFit: "contain" }}
        src={item.image}
        title={item.title}
      />
      <h5 className="col-4">{item.title.split(" ").slice(0, 5).join(" ")}</h5>
      {/* Quantity BUTTONS*/}
      <QuantityButtons item={item} setIsProductModal={setIsProductModal} />
      <h4 className="col-1 d-lg-flex d-sm-none">x</h4>
      <div className="col-1 d-lg-flex d-sm-none">
        <h4>${millify(item.price)}</h4>
      </div>
      <h4 className="col-1 d-lg-flex d-sm-none">=</h4>
      <div>
        <h3 className="text-danger col-1 ">
          ${millify(item.price * item.quantity)}
        </h3>
      </div>
      {isProductModal && (
        <Modal setIsModal={setIsProductModal} item={item} textInput={"Item"} />
      )}
    </div>
  );
};

export default CartList;
