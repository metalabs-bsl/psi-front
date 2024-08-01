import styles from "./Advantages.module.scss";
export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={`${styles.advantagesContainer} container`}>
        <div className={styles.advantagesWrapper}>
          <h2 className={`${styles.advantagesTitle} defTitle`}>
            Дорогие <span>друзья</span>
          </h2>
          <ul className={styles.advantagesList}>
            <li className={styles.advantagesItem}>
              <p className={styles.advantagesText}>
                вы устали от бесконечной борьбы с лишними килограммами?
              </p>
            </li>
            <li className={styles.advantagesItem}>
              <p className={styles.advantagesText}>
                Годами пытаетесь похудеть, но диеты и тренировки не приносят
                желаемого результата?
              </p>
            </li>
            <li className={styles.advantagesItem}>
              <p className={styles.advantagesText}>
                Пришло время узнать секрет устойчивого снижения веса без мучений
                и ограничений!
              </p>
            </li>
          </ul>
          <h2 className={`${styles.advantagesTitle} defTitle`}>
            Я- профессиональный гипнотерапевт предлагаю{" "}
            <span>революционный</span> подход к похудению:
          </h2>
          <ul className={styles.blocksWrapper}>
            <li className={styles.block}>
              <h3 className={styles.blockTitle}>Работа с подсознанием</h3>
              <p className={styles.blockText}>
                Я помогу вам раскрыть и устранить глубинные причины набора веса,
                о которых вы даже не подозревали
              </p>
            </li>
            <li className={styles.block}>
              <h3 className={styles.blockTitle}>
                Освобождение от эмоциональных блоков
              </h3>
              <p className={styles.blockText}>
                Забудьте о стрессе, тревоге и эмоциональном переедании. Обретите
                внутреннюю гармонию и контроль над своими пищевыми привычками
              </p>
            </li>
            <li className={styles.block}>
              <h3 className={styles.blockTitle}>
                Перепрограммирование мышления
              </h3>
              <p className={styles.blockText}>
                Измените свое отношение к еде и собственному телу на
                подсознательном уровне
              </p>
            </li>
            <li className={styles.block}>
              <h3 className={styles.blockTitle}>
                Повышение самооценки и уверенности
              </h3>
              <p className={styles.blockText}>
                Полюбите себя и свое тело, что станет мощным стимулом к
                позитивным изменениям
              </p>
            </li>
            <li className={styles.block}>
              <h3 className={styles.blockTitle}>
                Активация внутренних ресурсов
              </h3>
              <p className={styles.blockText}>
                Разбудите свою природную мотивацию к здоровому образу жизни и
                стройности
              </p>
            </li>
            <a className={styles.blockLink} href="">
            <li className={styles.block}>
                Получить доступ к курсу прямо сейчас
            </li>
            </a>

          </ul>
        </div>
      </div>
    </section>
  );
};
