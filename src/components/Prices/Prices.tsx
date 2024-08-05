import React from 'react'
import styles from './Prices.module.scss'

export const Prices = () => {
  return (
    <section className={styles.price} id='price'>
      <div className={`${styles.price__container} container`}>
        <div className={`${styles.price__liberation} ${styles.price__card} `}>
            <h2 className={styles.price__subTitle}>"Пакет Освобождение"</h2>
            <div className={styles.price__price}>
                <p>4 750 руб.</p>
            </div>
            <ul className={styles.price__list}>
                <li>Видеокурс по избавлению от некомфортного веса</li>
            </ul>
            <p className={styles.price__desc}>Этот пакет идеален для тех, кто готов самостоятельно работать над собой, имеет опыт самоанализа и желает получить базовые инструменты для трансформации. Подходит мотивированным людям, которые предпочитают обучаться в своем темпе и применять знания без дополнительной поддержки</p>
            <button className={styles.price__btn}>Купить пакет</button>
        </div>
        <div className={`${styles.price__reload} ${styles.price__card} `}>
            <h2 className={styles.price__subTitle}>"Пакет Перезагрузка"</h2>
            <div className={styles.price__price}>
                <p>6 350 руб.</p>
            </div>
            <ul className={styles.price__list}>
                <li>Видеокурс по избавлению от некомфортного веса</li>
                <li>Индивидуальная консультация-разбор причин набора веса с Зариной</li>
                <li>Одна проработка причин набора веса</li>
            </ul>
            <p className={styles.price__desc}>Этот пакет отлично подойдет тем, кто ценит персональный подход и нуждается в индивидуальной диагностике своей ситуации. Идеален для людей, которые хотят глубже разобраться в причинах своего лишнего веса и получить персонализированные рекомендации, но при этом готовы к дальнейшей самостоятельной работе</p>
            <button className={styles.price__btn}>Купить пакет</button>
        </div>
        <div className={`${styles.price__transformation} ${styles.price__card} `}>
            <h2 className={styles.price__subTitle}>"Пакет Полная трансформация"</h2>
            <div className={styles.price__price}>
                <p>62 000 руб.</p>
            </div>
            <ul className={styles.price__list}>
                <li>Видеокурс по избавлению от некомфортного веса</li>
                <li>Индивидуальная консультация-разбор причин набора веса с Зариной</li>
                <li>Восемь проработок по устранению всех причин набора веса</li>
                <li>Индивидуальное сопровождение в течение двух месяцев</li>
            </ul>
            <p className={styles.price__desc}>Этот премиум-пакет создан для тех, кто готов к глубоким изменениям и ценит всестороннюю поддержку на пути 
            к цели. Идеален для людей с длительной историей борьбы с лишним весом, тех, кто сталкивается со сложными психологическими барьерами или просто предпочитает максимально эффективный и индивидуализированный подход. Подходит занятым профессионалам, которые готовы инвестировать в свое здоровье и внешний вид, но нуждаются в постоянной поддержке и мотивации</p>
            <button className={styles.price__btn}>Купить пакет</button>
        </div>
      </div>
    </section>
  )
}

