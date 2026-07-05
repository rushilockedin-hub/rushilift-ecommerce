import React, { useEffect } from "react";
import { logPageVisit } from "../utils/logger";

const ProductPage = () => {
  useEffect(() => {
    logPageVisit("ProductPage");
  }, []);

  return <h1>All Products Listing</h1>;
};

export default ProductPage;
