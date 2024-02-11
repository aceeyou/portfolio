import React from "react";
import Section from "../components/Section";
import style from "../styles/Hero.module.css";

function Hero() {
  return (
    <Section>
      <div className={style.avatar} id="home">
        <img
          src={require("../images/ace/ace-photo-1.png")}
          alt="Ace Logronio"
          loading="lazy"
        />
        <div className={style.group}>
          <p aria-label="Ace" className={style.ace}>
            ACE
          </p>
          <p className={style.frontend_developer}>Front-End Developer</p>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
