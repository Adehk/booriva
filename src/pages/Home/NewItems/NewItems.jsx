import { Link } from "react-router-dom";

import ProductCard from "../../../components/ProductCard";

import SeeAllBtnBg from "../../../assets/icons/SeeAllBtnBg";
import ProductImg1 from "../../../assets/images/product-img-1.png";
import ProductImg2 from "../../../assets/images/product-img-2.png";
import ProductImg3 from "../../../assets/images/product-img-3.png";
import ProductImg4 from "../../../assets/images/product-img-4.png";

import styles from "./NewItems.module.sass";

const NewItems = () => {
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
    <div className={styles.newItems}>
      <div className={styles.heading}>
        <h1 className={styles.shadow}>НОВИНКИ</h1>
        <p className={styles.title}>НОВИНКИ</p>
      </div>
      <div className={styles.cards}>
        {products.map(({ id, image, name, price }) => (
          <ProductCard image={image} name={name} price={price} key={id} />
        ))}
      </div>
      <Link to="/newitems" className={styles.svgButton}>
        <SeeAllBtnBg />
        <span className={styles.buttonText}>Cмотреть все</span>
      </Link>
    </div>
  );
};

export default NewItems;
