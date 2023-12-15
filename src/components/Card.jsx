import React from "react";
import RatingStar from "./RatingStars";
import { toast } from "react-toastify";
import AddBasketButton from "./AddBasketButton";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail?id=${item.id}`)}
      className="card shadow-lg"
      style={{
        width: "250px",
        height: "675px",
        cursor: "pointer",
      }}
    >
      <img
        src={item?.image}
        title={item?.title}
        className="object-fit-contain mt-1 p-1"
        style={{ height: "300px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between ">
        <h5 className="card-title">
          {item?.title.split(" ").slice(0, 10).join(" ")}
        </h5>
        <p title={item?.description} className={`card-text description`}>
          {item?.description && item.description.slice(0, 100) + "..."}
        </p>
        <div>
          <h5>${item.price}</h5>
          <div
            onClick={(e) => {
              toast("❤️ Thanks for rating!"), e.stopPropagation();
            }}
          >
            <RatingStar key={v4()} item={item} />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <AddBasketButton key={v4()} item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
