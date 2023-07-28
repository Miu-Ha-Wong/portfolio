import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Intro from "./components/Intro";
import NavSocialMedia from "./components/NavSocialMedia";
import styles from "./App.module.css";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TitleMenu from "./components/TitleMenu";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header setShow={setShow} />
      <NavSocialMedia />
      <div className={styles.container}>
        <Intro />
        <AboutMe />
        <Project />
        <Contact />
        {show && <TitleMenu setShow={setShow} />}
      </div>
    </div>
  );
}

export default App;
