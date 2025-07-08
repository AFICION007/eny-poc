import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

import styles from "./styles.module.css";

import brandLogo from "./assets/brand-logo.png";
import bookmark from "./assets/bookmark.svg";
import menuIcon from "./assets/menu-icon.svg";
import notifications from "./assets/notifications.svg";
import upload from "./assets/upload.svg";

const PRIMARY_COLOR = "#8c71f9";

const Layout = () => {
  const iconButtons = [
    {
      backgroundColor: PRIMARY_COLOR,
      icon: bookmark,
    },
    {
      backgroundColor: "#FFFFFF",
      icon: notifications,
    },
    {
      backgroundColor: "#3f4040",
      icon: menuIcon,
    },
  ];

  const navLinks = [
    { path: "/home", label: "HOME" },
    // { path: "/my-directory", label: "MY DIRECTORY" },
    // { path: "/my-documents", label: "MY DOCUMENTS" },
    // { path: "/collaterals", label: "COLLATERALS" },
    // { path: "/coverage-universe", label: "COVERAGE UNIVERSE" },
    // { path: "/templates", label: "TEMPLATES" },
    // { path: "/valuations", label: "VALUATIONS" },
  ];

  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/home");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layout_header}>
        <div className={styles.header_top}>
          <div className={styles.left}>
            <img
              src={brandLogo}
              onClick={handleClickLogo}
              className={styles.avendus_logo}
            />
            {/* <span className={styles.title}>
              <strong className={styles.strong_title}>Welcome</strong>, Gaurav
              Deepak{" "}
            </span>
            <span className={styles.title}>
              Vertical: Digitial, Technology and Consumer | Sector: B2B
              E-Commerce
            </span> */}
          </div>
          <div className={styles.right}>
            <div className={styles.upload_button}>
              <span className={styles.upload_text}>UPLOAD</span>
              <img src={upload} className={styles.upload_icon} />
            </div>

            {iconButtons.map(({ icon, backgroundColor }) => (
              <div style={{ backgroundColor }} className={styles.icon_button}>
                <img src={icon} alt="" className={styles.button_icon} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.nav_links}>
          <Link to="/home">HOME</Link>
          {/* <Link to="/my-directory">MY DIRECTORY</Link> */}
          <Link to="/my-documents">MY DOCUMENTS</Link>
          <Link to="/collaterals">COLLATERALS</Link>
          <Link to="/coverage-universe">COVERAGE UNIVERSE</Link>
          {/* <Link to="/templates">TEMPLATES</Link>
          <Link to="/valuations">VALUATIONS</Link> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
