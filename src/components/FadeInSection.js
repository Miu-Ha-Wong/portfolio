import React, { useState, useEffect, useRef } from "react";
import styles from "./FadeInSection.module.css";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    // Clean up the observer when the component is unmounted
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${styles["fade-in-section"]} ${
        isVisible ? styles["is-visible"] : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
