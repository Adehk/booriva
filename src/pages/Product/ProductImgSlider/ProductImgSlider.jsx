import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setSavedData } from "../../../redux/savedData/savedDataSlice";

import HollowHeart from "../../../assets/icons/HollowHeart";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";
import styles from "./ProductImgSlider.module.sass";

const ProductImgSlider = ({ id, images }) => {
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.savedData.savedData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [descktopThumbsSwiper, setDescktopThumbsSwiper] = useState(null);
  const isSaved = savedData.includes(id);

  const handleAddProductToWishlistClick = () => {
    const newIsSaved = !isSaved;
    dispatch(
      setSavedData(
        newIsSaved
          ? [...savedData, id]
          : savedData.filter((productId) => productId !== id)
      )
    );
  };

  return (
    <div className={styles.swiperWrapper}>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination, Thumbs, FreeMode]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className={styles.swiper}
        >
          {images.map((url, i) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={i}>
                <img src={url} alt="" />
                <div className={styles.icon}></div>
              </SwiperSlide>
            );
          })}
          <div
            className={styles.icon}
            onClick={handleAddProductToWishlistClick}
          >
            <HollowHeart save={isSaved} />
          </div>
        </Swiper>
        <Swiper
          modules={[Pagination, Thumbs, FreeMode]}
          slidesPerView={4}
          spaceBetween={10}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.thumnailSwiper}
        >
          {images.map((url, i) => (
            <SwiperSlide key={i} className={styles.thumnailSwiperSlide}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.descktopSwiperContainer}>
        <Swiper
          modules={[Pagination, Thumbs, FreeMode]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: descktopThumbsSwiper }}
          className={styles.desktopSwiper}
        >
          {images.map((url, i) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={i}>
                <img src={url} alt="" />
                <div className={styles.icon}></div>
              </SwiperSlide>
            );
          })}
          <div
            className={styles.icon}
            onClick={handleAddProductToWishlistClick}
          >
            <HollowHeart save={isSaved} />
          </div>
        </Swiper>
        <Swiper
          modules={[Pagination, Thumbs, FreeMode]}
          slidesPerView={4}
          spaceBetween={15}
          direction={"vertical"}
          onSwiper={setDescktopThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.descktopThumnailSwiper}
        >
          {images.map((url, i) => (
            <SwiperSlide key={i} className={styles.descktopThumnailSwiperSlide}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImgSlider;
