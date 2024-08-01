import Image from "next/image";
import authorImg from "../../../public/images/authorImg.png";
import styles from "./AboutAuthor.module.scss";
export const AboutAuthor = () => {
  return (
    <section className={styles.author}>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={`${styles.title} def-title`}>
              Я - Осмоналиева Зарина Муратбековна
            </h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.text}>
                  Сертифицированный мастер по регрессивной гипнотерапии
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  Пропагандист, Консультант ГНМ (Германская Новая Медицина)
                  Здоровье без таблеток, химии и хирургических операций
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  Мастер по Холестической терапии подсознания
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Проводник в бессознательное</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  Обладаю уникальной техникой работы с подсознанием
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  Автор курса “Стройность через Подсознание -
                  самостоятельное снижение веса без диет, тренировок ,
                  аффирмаций , медитаций”
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={authorImg} alt="Автор" />
          </div>
        </div>
      </div>
    </section>
  );
};
