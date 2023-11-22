import ProductImgSlider from "./ProductImgSlider/ProductImgSlider";
import ProdictInfo from "./ProductInfo/ProductInfo";
import USP from "../../components/USP";
import Insta from "../../components/Insta";
import MightLike from "./MightLike/MightLike";

import styles from "./index.module.sass";

const Product = () => {
  return (
    <div>
      <div className={styles.product}>
        <ProductImgSlider />
        <ProdictInfo />
      </div>
      <USP />
      <MightLike />
      <Insta />
    </div>
  );
};

export default Product;
