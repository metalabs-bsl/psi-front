"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import styles from "./Header.module.scss";
import { useEffect, useRef } from "react";
export const Header = () => {
  const modalMenu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const modal = modalMenu.current;
    if (modal) {
      modal.style.display = "none";
    }
  }, []);

  const openMenu = () => {
    const modal = modalMenu.current;
    if (modal) {
      modal.style.display = "block";
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        (modal.style.visibility = "visible"), (modal.style.opacity = "1");
      }, 100);
    }
  };
  const closeMenu = () => {
    const modal = modalMenu.current;
    document.body.style.overflow = 'scroll'
    if (modal) {
      modal.style.opacity = "0";
      setTimeout(() => {
        (modal.style.visibility = "hidden"), (modal.style.display = "none");
      }, 100);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <a className={styles.headerLogo} href="#hero">
          <Image src={logo} alt="Логотип" />
        </a>
        <nav className={styles.headerNav}>
          <a className={styles.headerLogo} href="#hero">
            <Image src={logo} alt="Логотип" />
          </a>
          <ul className={styles.headerList}>
            <li className={styles.headerItem}>
              <a className={styles.headerLink} href="#course">
                О курсе
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerLink} href="#advantages">
                Преимущества
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerLink} href="#about">
                Обо мне
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerLink} href="#price">
                Пакеты
              </a>
            </li>
            <li className={styles.headerItem}>
              <a className={styles.headerLink} href="#swiper">
                Отзывы
              </a>
            </li>
          </ul>
          <button className={styles.headerBtn}><a href="#form">Купить курс</a></button>
        </nav>
        <button className={styles.header__burger} onClick={openMenu} hidden>
          <div className={styles.burger__btn_line}></div>Меню
        </button>
        <div className={`${styles.burger__section} burger`} ref={modalMenu}>
          <div className="container">
            <div className={styles.burger__header}>
              <button className={styles.burger__close} onClick={closeMenu}>
                <div className={styles.burger__line_x}></div>Меню
              </button>
            </div>
            <div className={styles.burger__container}>
              <nav>
                <ul className={styles.burger__menu}>
                  <li>
                    <a
                      href="#hero"
                      onClick={closeMenu}
                      className={`${styles.header__link} ${styles.headerLogo}`}
                    >
                      <Image src={logo} alt="Логотип" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#course"
                      onClick={closeMenu}
                      className={styles.header__link}
                    >
                      О курсе
                    </a>
                  </li>
                  <li>
                    <a
                      href="#advantages"
                      onClick={closeMenu}
                      className={styles.header__link}
                    >
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={closeMenu}
                      className={styles.header__link}
                    >
                      Обо мне
                    </a>
                  </li>
                  <li>
                    <a
                      href="#price"
                      onClick={closeMenu}
                      className={styles.header__link}
                    >
                      Пакеты
                    </a>
                  </li>
                  <li>
                    <a
                      href="#swiper"
                      onClick={closeMenu}
                      className={styles.header__link}
                    >
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <button onClick={closeMenu} className={styles.header__btn}>
                      <a href="#form">Купить курс</a>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
