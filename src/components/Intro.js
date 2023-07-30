import React from "react";
import styles from "./Intro.module.css";
import AboutMe from "./AboutMe";

function Intro() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.introContainer}>
        <div className={styles.fadeIn}>
          <div className={styles.introFirst}>Hi, my name is</div>
          <div className={styles.introName}>Miu Ha Wong.</div>
        </div>

        <div className={styles.typewriter}>
          <span className={styles.text}>Code with Passion!</span>
        </div>
        <div className={styles.fadeIn}>
          <div className={styles.introDescript}>
            I'm a Toronto-based web developer skilled in HTML, CSS, JavaScript,
            and React. Driven to create dynamic, user-friendly web apps and stay
            current with tech trends. Let's collaborate!
          </div>
        </div>

        <a className={styles.btnFadeIn} href="mailto:wmh0226@gmail.com">
          <button className={styles.introButton}>Get In Touch</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
