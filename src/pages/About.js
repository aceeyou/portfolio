import React from "react";
import Section from "../components/Section";
import style from "../styles/About.module.css";
import Tech from "../components/Tech";
import IntersectionOberserver from "../components/IntersectionOberserverContainer";

function About() {
  return (
    <Section>
      <IntersectionOberserver>
        <div className={`${style.container} `} id={"about"}>
          <img
            className={style.graphic_1}
            src={require("../images/graphics/squigly1.png")}
            alt="graphic"
            loading="lazy"
          />
          <div className={style.box}>
            <article className={style.about__header}>
              <div className={style.header__group}>
                <p className={style.greetings}>
                  Hello! <span className={style.hand}>👋</span>
                </p>
                <h1 className={style.header__title}>I'm Ace Arwin Logronio</h1>
              </div>
              <p className={style.header__description}>
                I graduated with a degree in Information Technology from Bicol
                University, Philippines. I like coding because of how gratifying
                it is when finishing a project. My passion for building UIs grew
                and grew throughout my stay in the university which helped me
                improve my skills.
              </p>
            </article>
            <article className={style.tech_used}>
              <h2 className={style.tech_used__title}>Tools / Skills ⌨️</h2>
              <ul className={style.tech_used__list}>
                <Tech text="HTML" value="html" />
                <Tech text="CSS" value="css" />
                <Tech text="Tailwind CSS" value="css" />
                <Tech text="JavaScript" value="js" />
                <Tech text="React" value="react" />
                <Tech text="React Native" value="react" />
                <Tech text="MySQL" value="mysql" />
                <Tech text="VS Code" value="vscode" />
                <Tech text="Figma" value="figma" />
                <Tech text="Git" value="git" />
                <Tech text="GitHub" value="github" />
              </ul>
            </article>
          </div>
          <div className={style.image__container}>
            <img
              className={style.image__image}
              src={require("../images/ace/ace-photo-2.png")}
              alt="Ace holding a laptop"
              loading="lazy"
            />
          </div>
        </div>
      </IntersectionOberserver>
    </Section>
  );
}

export default About;
