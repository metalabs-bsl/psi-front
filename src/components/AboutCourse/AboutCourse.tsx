import styles from "./AboutCourse.module.scss";
export const AboutCourse = () => {
  return (
    <section className={styles.aboutCourse}>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <h2 className={`${styles.title} def-title`}>
              Терапия подсознания это:
            </h2>
            <ul className={styles.topList}>
              <li className={styles.topItem}>
                <p className={styles.topText}>
                  Никаких жестких диет и изнурительных тренировок Устойчивый
                  результат без эффекта "качели"
                </p>
              </li>
              <li className={styles.topItem}>
                <p className={styles.topText}>
                  Безопасный и научно обоснованный метод. Быстрые изменения
                  после проработки причин набора веса
                </p>
              </li>
              <li className={styles.topItem}>
                <p className={styles.topText}>
                  Уникальный видеокурс пошагово обучает работать с подсознанием
                  самостоятельно
                </p>
              </li>
            </ul>
            <h2 className={`${styles.title} def-title`}>
              Представьте, как уже через несколько недель вы:
            </h2>
            <ul className={styles.bottomList}>
              <li className={styles.bottomItem}>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  легко отказываетесь от вредных продуктов
                </p>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  наслаждаетесь здоровой пищей
                </p>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  чувствуете прилив энергии и бодрости
                </p>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  видите, как одежда становится вам велика
                </p>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  получаете комплименты от окружающих
                </p>
                <p className={`${styles.bottomText} ${styles.textCircle}`}>
                  <span></span>
                  обретаете уверенность в себе и своей привлекательности
                </p>
              </li>
              <li className={styles.bottomItem}>
                <p className={styles.bottomText}>
                  Не откладывайте счастье! Ваше подсознание — ключ к телу мечты.
                  Позвольте мне помочь вам начать новую жизнь без лишнего веса.
                  Приобретая курс работы с подсознанием, вы делаете шаг к
                  трансформации!
                </p>
              </li>
              <li className={styles.bottomItem}>
                <p className={styles.bottomText}>
                  <span>Помните</span>: ваш идеальный вес - это не только о
                  цифрах на весах, это о свободе, здоровье и уверенности в себе.
                  Дайте себе шанс раскрыть свою истинную красоту с помощью силы
                  подсознания!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
