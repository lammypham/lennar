import React from "react";
import Link from "next/link";

// Components
import LandingPageIcon from "../svgs/LandingPageIcon";
import Button from "../Button";
// styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarItems}>
        <div className={styles.navbarLinks}>
          <div className={styles.icon}>
            <LandingPageIcon />
          </div>
          <Link href="/product">Product</Link>
          <Link href="/features">Features</Link>
          <Link href="/marketplace">MarketPlace</Link>
          <Link href="/company">Company</Link>
        </div>
      </div>

      <div className={styles.navbarActions}>
        <Link href="/login">Login</Link>
        <Button type="primary" title="Start Free Trial" />
      </div>
    </div>
  );
};

export default NavBar;
