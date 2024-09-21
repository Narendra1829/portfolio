import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/edited.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Dynamic Frontend Developer with nearly 2 years of experience in
                creating user-centric web applications that are both visually
                appealing and technically robust. I excel at turning complex
                problems into simple, elegant solutions, using tools like
                React.js and modern web technologies. My work is driven by a
                passion for design and a commitment to high-quality code,
                ensuring that each project not only meets but exceeds user
                expectations. I enjoy collaborating with diverse teams, bringing
                creative ideas to life while continuously exploring new trends
                and technologies to enhance the digital experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
