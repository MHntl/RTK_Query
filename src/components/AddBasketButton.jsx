import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET } from "../ReduxStore/slice/basketSlice";
import { toast } from "react-toastify";

const AddBasketButton = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ADD_TO_BASKET(item));
    toast.success("Item has been added your cart!");
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="btn btn-primary w-100 z-3"
    >
      Add to Cart
    </button>
  );
};

export default AddBasketButton;
