import React from "react";
import style from "../styles/Footer.module.css";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footer__container}>
      <div className={style.footer__footer}>
        <div className={style.footer__logo_container}>
          <div className={style.footer__circle}>
            <img
              width={100}
              src={require("../images/logo/logo-black.png")}
              alt="logo"
            />
          </div>
        </div>
        <div className={style.footer__main}>
          <section className={style.footer__navigation}>
            <h1 className={style.footer__col_header}>Footer Navigation</h1>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </section>
          <section className={style.footer__socialmedia_links}>
            <h1 className={style.footer__col_header}>Social Media</h1>

            <div className={style.footer__links_container}>
              <div className={style.footer__link_container}>
                <a
                  className={style.footer__social_link}
                  href="https://www.linkedin.com/in/ace-arwin-logronio/"
                >
                  <FaLinkedin size={30} />
                </a>
                <span>LinkedIn</span>
              </div>
              <div className={style.footer__link_container}>
                <a
                  className={style.footer__social_link}
                  href="https://github.com/aceeyou"
                >
                  <FaGithub size={30} />
                </a>
                <span>Github</span>
              </div>
              <div className={style.footer__link_container}>
                <a
                  className={style.footer__social_link}
                  href="https://www.facebook.com/AceArwin.Logronio/"
                >
                  <FaFacebook size={30} />
                </a>
                <span>Facebook</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={style.bottom}>
        <p></p>
        <p className={style.copyright}>
          © 2024 Ace Arwin Logronio. All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
