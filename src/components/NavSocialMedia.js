import React from "react";
import styles from "./NavSocialMedia.module.css";
import github from "../assess/github.png";
import linkedin from "../assess/linkedin.png";
import instagram from "../assess/instagram.png";
import facebook from "../assess/facebook.png";

function NavSocialMedia() {
  return (
    <div className={styles.container}>
      <div className={styles.toolLogoContainer}>
        <div className={styles.smLogo}>
          <a href="https://github.com/Miu-Ha-Wong" target="_blank">
            <img className={styles.githubLogo} src={github} alt="js" />
          </a>
        </div>
        <div className={styles.smLogo}>
          <a href="https://www.linkedin.com/in/miu-ha-wong/" target="_blank">
            <img className={styles.linkedinLogo} src={linkedin} alt="html" />
          </a>
        </div>

        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default NavSocialMedia;
