import { useState, useEffect } from "react";

import ConfirmTheOrderBtnbg from "../../assets/icons/ConfirmTheOrderBtnBg";

import styles from "./index.module.sass";
import Cart from "./Cart/Cart";
import OrderAccepted from "./OrderAccepted/OrdeAccepted";

const PlacingAnOrder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    "Доставка в отделение почты"
  );

  const [isOrderAcceptedVisible, setIsOrderAcceptedVisible] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameInputChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextareaInputChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setSelectedDeliveryMethod(e.target.value);
  };

  const handleShowOrderAccepted = () => {
    setIsOrderAcceptedVisible(true);
  };

  useEffect(() => {
    if (isOrderAcceptedVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOrderAcceptedVisible]);

  return (
    <div>
      {isOrderAcceptedVisible && (
        <OrderAccepted
          isOrderAcceptedVisible={isOrderAcceptedVisible}
          setIsOrderAcceptedVisible={setIsOrderAcceptedVisible}
        />
      )}
      <div className={styles.placingAnOrder}>
        <div className={styles.cartInfoWrapper}>
          <div className={styles.cartInfo}>
            <div className={styles.heading}>
              <h1 className={styles.category}>В корзине</h1>
              <p className={styles.subcategory}>Товары в корзине</p>
            </div>
            <p className={styles.numberOfproducts}>
              <span>Всего:</span>
              <span className={styles.productNumber}>
                <b>6 товаров</b>
              </span>
            </p>
            <p className={styles.orderPrice}>
              <span>Сумма заказа:</span>
              <span className={styles.price}>
                <b>5 000 &#8381; </b>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.placingAnOrderContent}>
          <div className={styles.contactInfo}>
            <div className={styles.step}>
              <h1 className={styles.title}>1</h1>
              <p className={styles.subtitle}>
                Контактные <br /> данные
              </p>
            </div>
            <form action="" method="" className={styles.form}>
              <input
                type="text"
                placeholder="Имя"
                required
                value={firstName}
                onChange={handleFirstNameInputChange}
              />
              <input
                type="text"
                placeholder="Фамилия"
                required
                value={lastName}
                onChange={handleLastNameInputChange}
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberInputChange}
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={handleEmailInputChange}
              />
            </form>
          </div>
          <div className={styles.deliveryMethod}>
            <div className={styles.step}>
              <h1 className={styles.title}>2</h1>
              <p className={styles.subtitle}>
                Способ
                <br /> доставки
              </p>
            </div>
            <form action="" className={styles.form2}>
              <div className={styles.radioBtns}>
                <div className={styles.radioBtn}>
                  <input
                    type="radio"
                    id="postalDelivery"
                    name="deliveryMethod"
                    value="Доставка в отделение почты"
                    checked={
                      selectedDeliveryMethod === "Доставка в отделение почты"
                    }
                    onChange={handleDeliveryMethodChange}
                  />
                  <label htmlFor="postalDelivery">
                    Доставка в отделение почты 
                  </label>
                </div>
                <div className={styles.radioBtn}>
                  <input
                    type="radio"
                    id="pickupFromShowroom"
                    name="deliveryMethod"
                    value="Самовывоз с нашего шоурума — бесплатно"
                    checked={
                      selectedDeliveryMethod ===
                      "Самовывоз с нашего шоурума — бесплатно"
                    }
                    onChange={handleDeliveryMethodChange}
                  />
                  <label htmlFor="pickupFromShowroom">
                    Самовывоз с нашего шоурума —{" "}
                    <span className={styles.free}>бесплатно</span>
                  </label>
                </div>
              </div>
              <textarea
                id="message"
                placeholder="Введите адрес"
                value={textarea}
                onChange={handleTextareaInputChange}
              ></textarea>
            </form>
          </div>

          <p className={styles.total}>
            <span>К оплате:</span>
            <span className={styles.price}>
              <b>5 000 &#8381;</b>
            </span>
          </p>
          <div className={styles.svgButton} onClick={handleShowOrderAccepted}>
            <ConfirmTheOrderBtnbg />
            <span className={styles.buttonText}>Подтвердить заказ</span>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default PlacingAnOrder;
