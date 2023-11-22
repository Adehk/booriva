import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";

import HollowHeart from "../../../assets/icons/HollowHeart";

import styles from "./ProductImgSlider.module.sass";

const ProductImgSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [descktopThumbsSwiper, setDescktopThumbsSwiper] = useState(null);

  const productImages = [
    {
      id: 0,
      name: "Product image",
      url: "https://s3-alpha-sig.figma.com/img/7dda/b40b/4fc60b1b29b1f469fae5c2aaed10238f?Expires=1701043200&Signature=mSd6JkXGUBpglFkAdAVJPQDNb3m1HWhtKSZ9oKmrGyp02b7KH5zZBb7WLyEzXFkq4tTYRjXAZruusgly87iTEc72IXTaQBSABDfk0q-~n7IZPTzG5mxiCZr6ugx4AjGkEOhvZ4Qs8g6VPkoowjW4j6DXTVioaY50eqC2lrF-fzV-bnzVkNTAnHMSZENpyPjLRZJ6igOHbTi4rwrrIKWFGHbNlNwAYpRK-lp1XbKFex7tLfwkO~-RbOVO8VpklEg7cVByV597AuQN7l1c5aIwLLW0kJf9r3cczImyLNO3Ba7SLiEi7fdLAygaTHekda~7qIBVOQl-1qtkcVsLATLgzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 1,
      name: "Product image",
      url: "https://s3-alpha-sig.figma.com/img/2a2f/6799/f6bbbc4b4cf43bcf2d5c5ca0408b3074?Expires=1701043200&Signature=lenH~z0e3lDquEO3dsONwm1HyUwY5BqKzvK8uGwHP5nDrH4viYRxwVDZM4f6PMds~vjVgv3xcTsMIrWyoZZX8YXcRoO5vXM6vsO~DyPqjycknEGJWuIIf2bUa5wyBVf-b-HMkStt8bIbLeISaOQbMj~OA8itPN9kqeQ1QvYGZtZcepfQfCpSd3tq6YSysoyfCrx1oarpHLYE6MGR-wENsVdS7JoZgL8uWpybbFSZPwrLISIzFG1-itW8nVN1po4S0i7IzSq47qBfwqpYRKAFL~YxsFvD~lNalBMwZ7QW1jRtXLpo1WQ83nNVU-sAaU8w0eVzi5kvj276duu9xWUl5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      name: "Product image",
      url: "https://s3-alpha-sig.figma.com/img/42b7/2bbd/90d98cc2b819bd4ea4ed37eccc26208f?Expires=1701043200&Signature=q9eSEt2KKGe157-GB-vQ5krbc~dEhi9QrXCrTJAEPZzHTMPNvxxvIZYFHc7HvcynBpU5RGxT9Q0C1KuIYqzsvV5j1~Nn6ltVYYxNDouoVjp1tiIC-dv51nW4fso0afSz07erD6grSlCxy4uoLA1HgVyTRwLCs2qra5RD6jlbPi9P6BqP4Q~Ap3-V0md7p3e77ky4S1Q2r40I01X59O1c~1nwLAVJ9~g7JEKPZWWOBfpPrQk6iUGdnqgmez9dR8-JTzigBUXnDfMFABb0vHZIo9RtxmssLl0RCj91xVZMhEfH9tGgUp1CIDcv8wu1kxj6n9MacEpnbaMR7eeOdHrvew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      name: "Product image",
      url: "https://s3-alpha-sig.figma.com/img/0c44/8f6a/c90505242a5473e96a5b05e50088a27c?Expires=1701043200&Signature=BTwlg~X5wZocP9~dETIe6eUCVIUb7Jp4ElYutHbSu9tEisEMUqw2KrcyVIMtlbtv8yZVLnqpJ8DTz8YO508wa4z3WSfwJ9gj2RNcOnvFoP8MFTBq3sWBs8uh69Fnq77MldouVX12iNR31CagJMLkRNZBDF6H2JT4Yfiow6mzaAFV-fijWQtSLh9m3MaI~AvkY9zGmrsLTi94Yr70EvEr1T1NCr9hjhaFPlpc9QWadi1sXLCx0kGhliCuUh0aGoqGvtnkGhqE8UdJ3pi7BQAE1eJ29nOUFkccxldWjosHjnNKTKWgZTYqPoCww7zcNXhQ5XvXqNpkf2U7u3cteZwO1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      name: "Product image",
      url: "https://s3-alpha-sig.figma.com/img/92e8/f7c7/80702998ce606d3bea33b83e09abebdc?Expires=1701043200&Signature=h68bCpPWFZPWgKY3We4536uwv5635TNdkANLglcG06HkIiUy4g6ts3L4iREq9LZAY5HQnkge2jLnqnmpDWqtO4yyUequlgop4FVboirmRz6cwM8DSsMwNg52S7wLIGwCIM4HPwyvo5i7WPmpdKmjNuUdFpI3-JLdceQeXaG7GDEpYuxBuIPNruvCt0W~KoVFsY94PGrfLo3RuUyrMSh4NaNDZ4hR8DKeAgCmtpgJPviywdOKV3he67BtaKx10eOR7agXtwjbVxIAn4~FCEW8IGO3tLQL5oGtmysS~8AXhbjOLSmN~wMY6kv9HobuwRffmBpLZLQe78kkUEZh90otpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <div className={styles.swiperWrapper}>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination, Thumbs, FreeMode]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className={styles.swiper}
        >
          {productImages.map(({ id, url, name }) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={id}>
                <img src={url} alt={name} />
                <div className={styles.icon}></div>
              </SwiperSlide>
            );
          })}
          <div className={styles.icon}>
            <HollowHeart />
          </div>
        </Swiper>
        <Swiper
          loop={true}
          modules={[Pagination, Thumbs, FreeMode]}
          slidesPerView={4}
          spaceBetween={34}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.thumnailSwiper}
        >
          {productImages.map(({ id, url, name }) => (
            <SwiperSlide key={id} className={styles.thumnailSwiperSlide}>
              <img src={url} alt={name} />
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
          {productImages.map(({ id, url, name }) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={id}>
                <img src={url} alt={name} />
                <div className={styles.icon}></div>
              </SwiperSlide>
            );
          })}
          <div className={styles.icon}>
            <HollowHeart />
          </div>
        </Swiper>
        <Swiper
          loop={true}
          modules={[Pagination, Thumbs, FreeMode]}
          slidesPerView={4}
          spaceBetween={25}
          direction={"vertical"}
          onSwiper={setDescktopThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.descktopThumnailSwiper}
        >
          {productImages.map(({ id, url, name }) => (
            <SwiperSlide
              key={id}
              className={styles.descktopThumnailSwiperSlide}
            >
              <img src={url} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImgSlider;
