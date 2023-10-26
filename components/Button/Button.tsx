import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IButton {
  title: String;
  onClick?: () => void;
  type: "primary" | "secondary";
}
enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
const Button = ({ title, onClick, type }: IButton) => {
  return (
    <button
      className={classNames(styles.container, {
        [styles.primary]: type === ButtonTypes.PRIMARY,
        [styles.secondary]: type === ButtonTypes.SECONDARY,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
