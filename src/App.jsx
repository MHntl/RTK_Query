import React from "react";
import { useGetProductsByIdQuery } from "./ReduxStore/actions/productApi";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage";
import Basket from "./pages/basket";
import { Spinner } from "react-bootstrap";
import Navbar from "./components/navbar";
import ProductDetail from "./pages/productDetail";
import { BASKET, DETAIL } from "./utils/constant";

const App = () => {
  const { data, error, isLoading } = useGetProductsByIdQuery("");

  return (
    <div className="d-flex flex-column align-items-center">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? <Spinner /> : <MainPage error={error} data={data} />
            }
          />
          <Route path={BASKET} element={<Basket />} />
          <Route path={DETAIL} element={<ProductDetail />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
