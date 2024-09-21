import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Narendra</h1>
        <p className={styles.description}>
          I'm a FrontEnd Developer with nearly 2 years of experience using React
          and JavaScript. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:narendra290599@gmail.com" className={styles.contactBtn}>
          Connect{" "}
        </a>
      </div>
      <img
        src={getImageUrl("hero/edited.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
