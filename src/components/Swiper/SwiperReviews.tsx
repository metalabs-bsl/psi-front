"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import rev1 from "../../../public/images/Отзыв 1.png";
import rev2 from "../../../public/images/Отзыв 2.png";
import rev3 from "../../../public/images/Отзыв 3.png";
import rev4 from "../../../public/images/Отзыв 4 (1).png";
import rev5 from "../../../public/images/Отзыв 5.png";
import rev6 from "../../../public/images/Отзыв 6.png";
import rev7 from "../../../public/images/Отзыв 7.png";
import rev8 from "../../../public/images/Отзыв 8.png";
import rev9 from "../../../public/images/Отзыв 9.png";
import Image from "next/image";
import styles from "./SwiperReviews.module.scss";
import "./swiper.scss"
export const SwiperReviews = () => {
  return (
    <section className={styles.sw} id="swiper">
      <div className={`${styles.container} container`}>
        <h2 className={styles.swTitle}><span>Отзывы</span> моих клиентов</h2>
      <Swiper 
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
          spaceBetween={15}
          slidesPerView={'auto'}
          initialSlide={0}
          centeredSlides={true}>
        <SwiperSlide className={styles.card}>
          <Image src={rev1} alt="отзыв" />
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          {" "}
          <Image src={rev2} alt="отзыв" />
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev3} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev4} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev5} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev6} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev7} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev8} alt="отзыв"/>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
        <Image src={rev9} alt="отзыв"/>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};
