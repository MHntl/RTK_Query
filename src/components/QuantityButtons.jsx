import React from "react";
import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
} from "../ReduxStore/slice/basketSlice";
import { useDispatch } from "react-redux";
import { COLORS } from "../utils/constant";

const QuantityButtons = ({ item, setIsProductModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-2">
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          onClick={
            item.quantity === 1
              ? () => setIsProductModal((prev) => true)
              : () => dispatch(DELETE_FROM_BASKET(item))
          }
          type="button"
          className="btn btn-danger fw-bold px-3"
        >
          -
        </button>
        <button
          disabled
          className="bg-dark px-2"
          style={{ color: COLORS.color1 }}
        >
          {item.quantity}
        </button>
        <button
          onClick={() => dispatch(ADD_TO_BASKET(item))}
          type="button"
          className="btn btn-warning fw-bold px-3"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityButtons;
