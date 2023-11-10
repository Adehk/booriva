import { Link } from "react-router-dom";
import WishlistIcon from "../../../assets/icons/Wishlist";

import styles from "./Wishlist.module.sass";

const Wishlist = () => {
  return (
    <Link to="/wishlist" className={styles.wishlist}>
      <WishlistIcon />
    </Link>
  );
};

export default Wishlist;
