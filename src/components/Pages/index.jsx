import { Spin } from "antd";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CompareProducts from "./Compare/CompareProducts";
import Products from "./product/Products";

const Pages = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route index path="/" element={<Navigate to="/products" />} />
        <Route index path="/products" element={<Products />} />
        <Route path="/compare-products/*" element={<CompareProducts />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
