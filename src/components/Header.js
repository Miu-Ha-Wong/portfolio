import React from "react";
import styles from "./Header.module.css";
import logo from "../assess/logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ setShow }) {
  const onShowHandler = () => {
    setShow(true);
  };

  const onNavHandler = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <a href="#home">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <div className={styles.rightContainer}>
        <a
          className={styles.title}
          onClick={() => {
            onNavHandler(0);
          }}
        >
          01. Home
        </a>
        <a
          className={styles.title}
          onClick={() => {
            onNavHandler(850);
          }}
        >
          02. About
        </a>
        <a
          className={styles.title}
          onClick={() => {
            onNavHandler(1750);
          }}
        >
          03. Project
        </a>
        <a
          className={styles.title}
          onClick={() => {
            onNavHandler(3000);
          }}
        >
          04. Contact
        </a>
        <div className={styles.menuIcon} onClick={onShowHandler}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <a
          href="https://drive.google.com/file/d/1M-6o0FX9GevcQOE8ml7ubiT_OikVCQtq/view?usp=sharing"
          target="_blank"
        >
          <button className={styles.resumeBtn}>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
