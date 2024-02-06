import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import WishlistIcon from "../../../assets/icons/Wishlist";

import styles from "./Wishlist.module.sass";

const Wishlist = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const counter = useSelector((state) => state.savedData.savedData).length;

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
      className={`${styles.wishlist} ${isActive ? styles.active : ""}`}
    >
      <WishlistIcon />
      <span className={styles.counter}>{counter}</span>
    </Link>
  );
};

export default Wishlist;
