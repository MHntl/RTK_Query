import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsByIdQuery } = productApi;
