import React from "react";

// Components
import CallOut from "../CallOut";
import Heading from "../Heading";
import TrailingContent from "../TrailingContent";

// Styles
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.container}>
      <CallOut />
      <Heading />
      <TrailingContent />
    </div>
  );
};

export default Content;
