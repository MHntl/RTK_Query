import React from "react";
import { useDispatch } from "react-redux";
import {
  CLEAR_ALL_BASKET,
  DELETE_FROM_BASKET,
} from "../ReduxStore/slice/basketSlice";
import { toast } from "react-toastify";

const Modal = ({ setIsModal, item, textInput = "ALL Product(s)" }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (textInput === "ALL Product(s)") {
      dispatch(CLEAR_ALL_BASKET());
      toast.warn(`${textInput} has been deleted!`);
    }
    if (textInput === "Item") {
      dispatch(DELETE_FROM_BASKET(item));
      toast.warn(`${textInput} has been deleted!`);
    }
    setIsModal((prev) => false);
  };
  return (
    <div className="modalOutline ">
      <div className="modalInline bordered">
        <div className="d-flex p-2 justify-content-end">
          <button
            className="btn btn-dark"
            onClick={() => setIsModal((prev) => false)}
          >
            x
          </button>
        </div>
        <div className="d-flex flex-column text-center">
          <h3>Caution!</h3>
          <h4>
            Your are deleting <span className="text-danger">{textInput}</span>
          </h4>
        </div>
        <div className="d-flex gap-3 mt-5 justify-content-center">
          <button onClick={() => handleClick()} className="btn btn-danger">
            DELETE
          </button>
          <button
            onClick={() => setIsModal((prev) => false)}
            className="btn btn-primary"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
