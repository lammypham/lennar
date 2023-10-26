import React from "react";

// Components
import NavBar from "../NavBar";
import Content from "../Content";
import Graphics from "../Graphics";

// Styles
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <Content />
        <Graphics />
      </div>
    </>
  );
};

export default Landing;
