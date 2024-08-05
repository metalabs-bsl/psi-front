import { Hero } from "@/components/Hero/Hero";
import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Advantages } from "@/components/Advantages/Advantages";
import { AboutCourse } from "@/components/AboutCourse/AboutCourse";
import { AboutAuthor } from "@/components/AboutAuthor/AboutAuthor";
import { VideoCourse } from "@/components/VideoCourse/VideoCourse";
import { Prices } from "@/components/Prices/Prices";
import { SwiperReviews } from "@/components/Swiper/SwiperReviews";
import Form from "@/components/Form/Form";


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Advantages />
        <AboutCourse />
        <AboutAuthor />
        <VideoCourse />
        <Prices />
        <SwiperReviews />
        <Form />
      </main>
    </>
  );
}
