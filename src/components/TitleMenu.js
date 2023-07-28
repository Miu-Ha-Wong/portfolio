import styles from "./TitleMenu.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const TitleMenu = ({ setShow }) => {
  const closeHandler = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <div onClick={closeHandler} className={styles.overlay}></div>
      <nav className={styles.container}>
        <div onClick={closeHandler} className={styles.close}>
          x
        </div>

        <div className={styles.titleContainer}>
          <a onClick={closeHandler} href="#home" className={styles.title}>
            Home
          </a>
        </div>
        <div className={styles.titleContainer}>
          <a onClick={closeHandler} href="#about" className={styles.title}>
            About
          </a>
        </div>
        <div className={styles.titleContainer}>
          <a onClick={closeHandler} href="#project" className={styles.title}>
            Project
          </a>
        </div>
        <div className={styles.titleContainer}>
          <a onClick={closeHandler} href="#contact" className={styles.title}>
            Contact
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default TitleMenu;
