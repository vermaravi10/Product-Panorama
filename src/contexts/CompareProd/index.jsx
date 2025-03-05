import React, { createContext, useState } from "react";

export const CompareProductData = createContext();

export const CompareContextProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);

  const addToCompareProducts = (product) => {
    setCompareProducts((prev) => {
      if (
        !prev?.some((value) => {
          return value?.id == product?.id;
        })
      ) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeToCompareProducts = (product) => {
    setCompareProducts((prev) =>
      prev?.filter((item) => item?.id !== product?.id)
    );
  };

  return (
    <CompareProductData.Provider
      value={{ compareProducts, addToCompareProducts, removeToCompareProducts }}
    >
      {children}
    </CompareProductData.Provider>
  );
};
