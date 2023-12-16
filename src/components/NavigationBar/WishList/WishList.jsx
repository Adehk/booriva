import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Wishlist from "../../../assets/icons/Wishlist";

import styles from "./WishList.module.sass";

const WishList = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/wishlist") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);
  return (
    <Link
      to="/wishlist"
      className={`${styles.navigationBarItem} ${isActive ? styles.active : ""}`}
    >
      <Wishlist />
      Wish list
    </Link>
  );
};

export default WishList;
