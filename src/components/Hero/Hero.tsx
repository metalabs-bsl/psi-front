import Image from "next/image";
import heroBg from "../../../public/images/Image.png";
import styles from "./Hero.module.scss";
export const Hero = () => {
  return (
    <div className={`${styles.heroContainer} container`} id="hero">
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Откройте для себя силу <span>подсознания</span>
          </h1>
          <div className={styles.imgWrapper}>
            <Image src={heroBg} alt="heroBg" />
          </div>
          <h2 className={styles.heroTitle}>
            и забудьте о лишнем весе <span>навсегда</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
