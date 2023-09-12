import React from "react";
import styles from "./AboutMe.module.css";
import pofoPic from "../assess/pofoPic3.jpg";
import css from "../assess/css.png";
import js from "../assess/js.png";
import react from "../assess/react.png";
import html from "../assess/html.png";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <div>
          <div className={styles.background}></div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>02. AboutMe</div>
            {/* <div class={styles.horizontal}></div> */}
          </div>
          <div className={styles.pofoPicContainer}>
            <img src={pofoPic} className={styles.pofoPic2} />
          </div>
          <div className={styles.greeting}>
            <p>
              Hello there, I am Miu Ha Wong! In the year 2023, my fascination
              for web development was sparked, leading me to take a leap of
              faith and embark on a fresh career path in this domain. This
              journey has been nothing short of exhilarating!
            </p>
            <p>
              Over the past year, I've dedicated myself to enriching my skills
              in this area. As I delved deeper into front-end programming, I
              found myself completely enamored by its possibilities and
              potential. Through six months of self-study, I've managed to build
              a strong and reliable foundation in essential technologies like
              HTML, CSS, JavaScript, and React.
            </p>
          </div>

          <div className={styles.toolLogoContainer}>
            <div className={styles.toolLogo}>
              <img className={styles.jsLogo} src={js} alt="js" />
            </div>
            <div className={styles.toolLogo}>
              <img className={styles.htmlLogo} src={html} alt="html" />
            </div>
            <div className={styles.toolLogo}>
              <img className={styles.cssLogo} src={css} alt="css" />
            </div>
            <div className={styles.toolLogo}>
              <img className={styles.reactLogo} src={react} alt="react" />
            </div>
          </div>
        </div>
        <div>
          <img src={pofoPic} className={styles.pofoPic} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
