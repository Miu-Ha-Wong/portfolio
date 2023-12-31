import React from "react";
import styles from "./Project.module.css";
import catProjectPic from "../assess/catProjectPic.png";
import weatherAppPic from "../assess/weatherApp_Pic.png";
import github from "../assess/github.png";
import link from "../assess/link.png";

function Project() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.widthContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>03. Project </div>
            {/* <div class={styles.horizontal}></div> */}
          </div>
          <div className={styles.introContainer}>
            <div>
              <div className={styles.title}>eCommerce website</div>
              <div className={styles.name}>CAT STORE</div>
              <img
                src={catProjectPic}
                alt="cat project picture"
                className={styles.catProject}
              />
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.description}>
                This is a cat supplies shopping website! Its exquisite UI design
                attracts customers to browse, while comprehensive features
                ensure a seamless user experience. The responsive web design
                makes the site perform beautifully on various devices. Let
                customers shop with ease and joy!
              </div>
              <div className={styles.toolConrainer}>
                <button className={styles.tools}>CSS</button>
                <button className={styles.tools}>REACT</button>
              </div>
              <div className={styles.toolConrainer}>
                <button className={styles.tools}>REDUX</button>
                <button className={styles.tools}>REACT-ROUTER</button>{" "}
              </div>
              <hr></hr>
              <div className={styles.linkContainer}>
                <a
                  href="https://github.com/Miu-Ha-Wong/cat-store"
                  target="_blank"
                  className={styles.linkDiv}
                >
                  {/* <button className={styles.link}>Code</button> */}
                  <img
                    src={github}
                    alt="github icon"
                    className={styles.linkIcon}
                  />
                </a>
                <a
                  href="https://cat-store-ecommerce.netlify.app/"
                  target="_blank"
                  className={styles.linkDiv}
                >
                  {/* <button className={styles.link}>Live Demo</button> */}
                  <img src={link} alt="link icon" className={styles.linkIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.introContainer}>
            <div>
              <div className={styles.title}>Forecast tool</div>
              <div className={styles.name}>Weather App</div>
              <img
                src={weatherAppPic}
                alt="cat project picture"
                className={styles.catProject}
              />
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.description}>
                This is a weather app that utilizes API! With this app, you can
                detect your current location and switch to another country to
                see weather forecasts in a different time zone. Plus, you can
                view the future six-day forecast, which is perfect for planning
                your summer days!
              </div>
              <div className={styles.toolConrainer}>
                <button className={styles.tools}>CSS</button>
                <button className={styles.tools}>HTML</button>
              </div>
              <div className={styles.toolConrainer}>
                <button className={styles.tools}>JavaScript</button>
                <button className={styles.tools}>HTTP Request</button>{" "}
              </div>
              <hr></hr>
              <div className={styles.linkContainer}>
                {/* <a
                  href="https://github.com/Miu-Ha-Wong/cat-store"
                  target="_blank"
                  className={styles.linkDiv}
                > */}
                {/* <button className={styles.link}>Code</button> */}
                {/* <img
                    src={github}
                    alt="github icon"
                    className={styles.linkIcon}
                  />
                </a> */}
                <a
                  href="https://64c73c1a06b69b68403f9172--jade-zuccutto-02fbf0.netlify.app/"
                  target="_blank"
                  className={styles.linkDiv}
                >
                  {/* <button className={styles.link}>Live Demo</button> */}
                  <img src={link} alt="link icon" className={styles.linkIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
