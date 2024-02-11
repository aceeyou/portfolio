import React from "react";
import style from "../styles/Tech.module.css";

const techUsedSwitch = (t) => {
  let value = "";
  switch (t) {
    case "HTML":
      value = "html";
      break;
    case "CSS":
      value = "css";
      break;
    case "Tailwind CSS":
      value = "css";
      break;
    case "JavaScript":
      value = "js";
      break;
    case "Git":
      value = "git";
      break;
    case "GitHub":
      value = "github";
      break;
    case "MySQL":
      value = "mysql";
      break;
    case "VS Code":
      value = "vscode";
      break;
    case "Figma":
      value = "figma";
      break;
    default:
      value = "react";
      break;
  }
  return value;
};
function Tech({ text, customStyle }) {
  return (
    <li
      className={[`${style.tech} ${style[customStyle]}`]}
      data-value={techUsedSwitch(text)}
    >
      <p className={style.tech__text} style={{ color: "white" }}>
        {text}
      </p>
    </li>
  );
}

export default Tech;
