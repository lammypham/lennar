"use client";
import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";

// Styles
import styles from "./TrailingContent.module.scss";

const TrailingContent = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          onChange={handleChange}
          placeholder="Enter your email"
          className={styles.input}
        />
        <Button title="Start Free Trial" type="secondary" />
      </div>
      <div>
        <p className={styles.tos}>
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our
        </p>
        <Link className={styles.tosLink} href="/termsofservice">
          terms or service
        </Link>
        .
      </div>
    </form>
  );
};

export default TrailingContent;
