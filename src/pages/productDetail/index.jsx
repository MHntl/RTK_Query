import React from "react";
import { useGetProductsByIdQuery } from "../../ReduxStore/actions/productApi";
import { useSearchParams } from "react-router-dom";
import NotFoundPage from "../notFound";
import Spinner from "../../components/Spinner";
import CartDetail from "../../components/CartDetail";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("id");
  const { data, error, isLoading } = useGetProductsByIdQuery(`${itemId}`);

  return (
    <div>
      {error ? (
        <NotFoundPage />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <CartDetail item={data} />
      )}
    </div>
  );
};

export default ProductDetail;
