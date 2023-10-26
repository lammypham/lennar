import React from "react";

// Components
import VectorUp from "../svgs/VectorUp";
import Person from "../svgs/Person";

import styles from "./Graphics.module.scss";
import VectorDown from "../svgs/VectorDown";
import VectorBar from "../svgs/VectorBar";
import VectorCircle from "../svgs/VectorCircle";
import VectorTrail from "../svgs/VectorTrail";
import VectorCloud from "../svgs/VectorCloud";
import VectorCloudShadow from "../svgs/VectorCloudShadow";
const Graphics = () => {
  return (
    <div className={styles.container}>
      <Person />
      <VectorUp />
      <VectorDown />
      <VectorBar />
      <VectorCircle top={"525px"} right={"500px"} />
      <VectorTrail />
      <VectorCircle top={"645px"} right={"410px"} />
      <VectorCloud top="300px" right="20px" />
      <VectorCloudShadow />
    </div>
  );
};

export default Graphics;
