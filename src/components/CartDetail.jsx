import React from "react";
import RatingStars from "../components/RatingStars";
import AddBasketButton from "./AddBasketButton";

const CartDetail = ({ item }) => {
  return (
    <div className="d-md-flex p-5 ">
      {/* ProductDetail */}
      <div className=" col-md-3">
        {/* IMAGE SECTION */}
        <img src={item.image} className="w-100" />
      </div>
      <div className="col-md-6 d-flex gap-3 ms-5 flex-column p-3">
        {/* ITEM DETAIL SECTION */}
        <h2>{item.title}</h2>
        <h5 className="text-capitalize text-secondary">
          category: {item.category}
        </h5>
        <h4>{item.description}</h4>
        <RatingStars item={item} />
        <h3>${item.price}</h3>
        <div className="w-50">
          <AddBasketButton item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
