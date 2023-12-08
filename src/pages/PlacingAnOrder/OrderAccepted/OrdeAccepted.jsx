import { Link } from "react-router-dom";

import CloseOrderAcceptedBtn from "../../../assets/icons/CloseOrderAcceptedBtn";
import BackToHome from "../../../assets/icons/BackToHome";

import styles from "./OrderAccepted.module.sass";
import { useEffect } from "react";

const OrderAccepted = ({
  isOrderAcceptedVisible,
  setIsOrderAcceptedVisible,
}) => {
  const handleHideOrderAccepted = () => {
    setIsOrderAcceptedVisible(false);
  };

  useEffect(() => {
    console.log(isOrderAcceptedVisible);
  }, [isOrderAcceptedVisible]);
  return (
    <div
      className={`${styles.orderAcceptedWrapper} ${
        isOrderAcceptedVisible ? styles.active : ""
      }`}
    >
      <div className={styles.orderAccepted}>
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
            Ставь тэг <a href="#">#boorivagirls</a> чтобы быть в нашей тусовке.
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
