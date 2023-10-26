"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Styles
import styles from "./Callout.module.scss";
import Link from "next/link";
import ChevonRight from "../svgs/ChevronRight";

const CallOut = () => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/career");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.badge}>WE&apos;RE HIRING</div>
      <p>Visit our career page</p>
      <ChevonRight />
    </div>
  );
};

export default CallOut;
