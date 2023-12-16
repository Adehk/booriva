import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import qs from "qs";

import ProductImgSlider from "./ProductImgSlider/ProductImgSlider";
import ProdictInfo from "./ProductInfo/ProductInfo";
import USP from "../../components/USP";
import Insta from "../../components/Insta";
import YouMightLike from "./YouMightLike/YouMightLike";

import styles from "./index.module.sass";

const Product = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.search) {
      const params = qs.parse(window.location.search.substring("1"));
      if (params.id) {
        fetch(
          `https://6569c6cede53105b0dd7a33a.mockapi.io/product?id=${params.id}`
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoader(false);
          });
      }
    }
  }, [location]);
  return (
    <div>
      {loader ? (
        <div className={styles.loader}>
          <BeatLoader className={styles.loader} color="#FDA3C4" />
        </div>
      ) : (
        <div className={styles.product}>
          <ProductImgSlider images={data[0].images} />
          <ProdictInfo
            name={data[0].name}
            price={data[0].price}
            desc={data[0].desc}
            details={data[0].details}
          />
        </div>
      )}
      <USP />
      <YouMightLike />
      <Insta />
    </div>
  );
};

export default Product;
