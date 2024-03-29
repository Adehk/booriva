import { Link } from "react-router-dom";

import CloseOrderAcceptedBtn from "../../../assets/icons/CloseOrderAcceptedBtn";
import BackToHome from "../../../assets/icons/BackToHome";

import styles from "./OrderAccepted.module.sass";

const OrderAccepted = ({
  isOrderAcceptedVisible,
  setIsOrderAcceptedVisible,
}) => {
  const handleHideOrderAccepted = () => {
    setIsOrderAcceptedVisible(false);
  };

  return (
    <div className={styles.orderAcceptedWrapper}>
      <div
        className={`${styles.orderAccepted} ${
          isOrderAcceptedVisible ? styles.active : ""
        }`}
      >
        <div className={styles.closeBtn} onClick={handleHideOrderAccepted}>
          <CloseOrderAcceptedBtn />
        </div>
        <div className={styles.orderAcceptedContent}>
          <div className={styles.heading}>
            <h1 className={styles.title}>СПАСИБО</h1>
            <p className={styles.subtitle}>Ваш заказ был принят</p>
          </div>
          <p className={styles.paragraph}>
            Мы любим встречать booriva на улице. Так как всех не встретишь,
            отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА! <br />
            Ставь тэг <Link to="/#">#boorivagirls</Link> чтобы быть в нашей
            тусовке.
          </p>
        </div>
        <Link to="/" className={styles.svgButton}>
          <BackToHome />
          <span className={styles.buttonText}>На главную</span>
        </Link>
      </div>
    </div>
  );
};

export default OrderAccepted;

