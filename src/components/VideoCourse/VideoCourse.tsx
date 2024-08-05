import styles from "./VideoCourse.module.scss";

export const VideoCourse = () => {
  return (
    <section className={styles.video} id="video">
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <h2 className={styles.subtitle}>
            Революционный видеокурс "Стройность через подсознание" - ваш ключ к
            <span> идеальному телу!</span>
          </h2>
          <p className={styles.subtitle}>
            <span>Внимание!</span> Этот курс - настоящий прорыв в мире
            похудения. Его ценность невозможно измерить, ведь речь идет о вашем
            здоровье, уверенности и качестве жизни!
          </p>

          <div className={styles.inner}>
            <h2 className={`${styles.innerTitle} def-title`}>
              <span>Специальное предложение:</span>
              <br /> Несмотря на бесценность данных знаний, сегодня вы можете
              приобрести весь курс в самом оптимальном для вас варианте за
              лучшую цену
            </h2>
            <ul className={styles.innerList}>
              <li>
                Эксклюзивные техники работы с подсознанием, недоступные в
                открытых источниках
              </li>
              <li>
                Авторская методика, основанная на многолетнем опыте успешной
                практики
              </li>
              <li>Комплексный подход, затрагивающий все аспекты похудения</li>
              <li>Ранний доступ к обновлениям курса</li>
              <li>
                Присоединитесь к сообществу единомышленников на пути к
                стройности
              </li>
            </ul>
          </div>
          <h2 className={styles.subtitle}>
            Не откладывайте на завтра возможность <span>изменить</span> <span>свою жизнь</span> уже
            сегодня! <br />
            Количество мест ограничено. Не упустите свой шанс!
          </h2>
        </div>
      </div>
    </section>
  );
};
