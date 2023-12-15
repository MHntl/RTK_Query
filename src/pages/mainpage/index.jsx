import React from "react";
import Card from "../../components/Card";
import { v4 } from "uuid";
import NotFoundPage from "../notFound";

const MainPage = ({ error, data }) => {
  return (
    <div>
      {error ? (
        <NotFoundPage key={v4()} />
      ) : (
        <div className="p-5 gap-5 d-flex justify-content-center flex-wrap">
          {data.map((item, i) => (
            <div className="cursor-pointer">
              <Card key={v4()} item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
