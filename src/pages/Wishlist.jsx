import React, { useEffect } from "react";
import { logPageVisit } from "../utils/logger";

const Wishlist = () => {
  useEffect(() => {
    logPageVisit("Wishlist");
  }, []);

  return <h1>Your Wishlist</h1>;
};

export default Wishlist;
