import Insta from "../../components/Insta";
import USP from "../../components/USP";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import ProductCard from "./ProductCard/ProductCard";

import ProductImg1 from "../../assets/images/product-img-1.png";
import ProductImg2 from "../../assets/images/product-img-2.png";
import ProductImg3 from "../../assets/images/product-img-3.png";

import styles from "./index.module.sass";

const Wishlist = () => {
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
  ];
  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Список желаний</h1>
          <p className={styles.subtitle}>твой тайный Список желаний</p>
        </div>
        <EmptyWishlist />
        {/* <div className={styles.cards}>
          {products.map(({ id, image, name, price }) => (
            <ProductCard key={id} image={image} name={name} price={price} />
          ))}
        </div> */}
      </div>
      <USP />
      <Insta />
    </div>
  );
};

export default Wishlist;
