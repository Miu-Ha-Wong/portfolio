import React from "react";
import styles from "./Contact.module.css";
import github from "../assess/github.png";
import linkedin from "../assess/linkedin.png";
import instagram from "../assess/instagram.png";
import facebook from "../assess/facebook.png";

function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.introContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>04. Contact Me</div>
          {/* <div class={styles.horizontal}></div> */}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentTitle}>What's Next?</div>
          <div className={styles.contentPoint}>Get In Touch</div>

          <div className={styles.content}>
            I am an active learner and good at problem-solving. My goal is to
            become a skilled front-end engineer and a reliable team player. Feel
            free to contact me for any questions, suggestions, or collaboration
            opportunities.
          </div>
          <a href="mailto:wmh0226@gmail.com">
            <button className={styles.introButton}>Say Hello</button>
          </a>
          <div className={styles.toolLogoContainer}>
            <a href="https://github.com/Miu-Ha-Wong" target="_blank">
              <img className={styles.githubLogo} src={github} alt="js" />
            </a>
            <a href="https://www.linkedin.com/in/miu-ha-wong/" target="_blank">
              <img className={styles.linkedinLogo} src={linkedin} alt="html" />
            </a>
            <a href="https://www.instagram.com/ha_ha0226/" target="_blank">
              <img className={styles.instagramLogo} src={instagram} alt="css" />{" "}
            </a>
            <a href="https://www.facebook.com/miu.h.wong" target="_blank">
              <img className={styles.facebookLogo} src={facebook} alt="react" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
