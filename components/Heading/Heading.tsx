import React from "react";
import classNames from "classnames";

// Styles
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.fontStyles, styles.fontColorPrimary)}>
        A better way to
      </div>
      <div className={classNames(styles.fontStyles, styles.fontColorSecondary)}>
        ship web apps
      </div>
      <div className={styles.subHeader}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </div>
    </div>
  );
};

export default Heading;
