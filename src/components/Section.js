import React from "react";
import style from "../styles/Section.module.css";

function Section({ children }) {
  return (
    <section tabIndex={0} className={style.container}>
      {children}
    </section>
  );
}

export default Section;
