import ProductImg1 from "../../assets/images/product-img-1.png";
import ProductImg2 from "../../assets/images/product-img-2.png";
import ProductImg3 from "../../assets/images/product-img-3.png";
import ProductImg4 from "../../assets/images/product-img-4.png";

import Filter from "../Catalog/Filter/Filter";
import Banner from "../Catalog/Banner/Banner";
import ProductCard from "../Catalog/ProductCard/ProductCard";

import styles from "./index.module.sass";
import Insta from "../../components/Insta";

const Catalog = () => {
  const products = [
    {
      id: 0,
      image: ProductImg1,
      name: "Cвитшoт вставка клетка",
      price: 1099,
    },
    {
      id: 1,
      image: ProductImg2,
      name: "Платье прозрачное в цветочек черное",
      price: 1299,
    },
    {
      id: 2,
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      price: 2499,
    },
    {
      id: 3,
      image: ProductImg4,
      name: "Платье-футболка рыбы в аквариуме",
      price: 899,
    },
  ];
  return (
    <div>
      <div className={styles.catalog}>
        <Banner />
        <div className={styles.heading}>
          <h1 className={styles.title}>Верх</h1>
          <p className={styles.subtitle}>ТоПЫ</p>
        </div>
        <Filter />
        <div className={styles.cards}>
          {products.map(({ id, image, name, price }) => (
            <ProductCard id={id} image={image} name={name} price={price} />
          ))}
        </div>
      </div>
      <Insta />
    </div>
  );
};

export default Catalog;
