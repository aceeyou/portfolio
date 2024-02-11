import React, { useState } from "react";
import style from "../styles/Navigation.module.css";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

function ListItem({ children, handleClick }) {
  return (
    <li className={style.list__item} onClick={handleClick}>
      {children}
    </li>
  );
}

function Link({ link, children }) {
  return (
    <a
      className={style.nav__link}
      href={link}
      aria-label={`Go to ${children} section`}
      tabIndex={0}
    >
      {children}
    </a>
  );
}

function Navigation() {
  const [toggleNav, setToggleNav] = useState(false);

  function handleToggleNav() {
    setToggleNav((t) => !t);
  }
  return (
    <nav className={[style.container]}>
      <button
        name="menu toggle"
        aria-label="menu toggle"
        className={style.mobile__menu_btn}
        onClick={handleToggleNav}
      >
        {toggleNav ? <MdClose size={23} /> : <RiMenu4Fill size={23} />}
      </button>
      <ul
        className={style.nav__list}
        style={{
          transform: toggleNav ? "translateY(0px)" : "translateY(-400px)",
        }}
      >
        <ListItem handleClick={handleToggleNav}>
          <Link link="#about">ABOUT</Link>
        </ListItem>
        <ListItem handleClick={handleToggleNav}>
          <Link link={"#projects"}>PROJECT</Link>
        </ListItem>
        <ListItem></ListItem>
        <ListItem handleClick={handleToggleNav}>
          <Link link={"#contact"}>CONTACT</Link>
        </ListItem>
        <ListItem handleClick={handleToggleNav}>
          <Link
            link={
              "https://drive.google.com/file/d/1N5vJ9RLsgal7as2evjXo0JyLJwVSjOEx/view?usp=sharing"
            }
          >
            RESUME
          </Link>
        </ListItem>
      </ul>

      <div className="logo">
        <svg
          className={style.logo}
          width="50"
          height="52"
          viewBox="0 0 38 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={style.path}
            d="M3.53693 33H0.767046L8.77841 11.1818H11.5057L19.517 33H16.7472L10.2273 14.6335H10.0568L3.53693 33ZM4.55966 24.4773H15.7244V26.821H4.55966V24.4773Z"
            fill="white"
          />
          <path
            className={style.path}
            d="M21.7188 32.0591L14.7869 11.3714L17.2921 10.532L23.4794 28.9974L33.0959 25.7751L33.8406 27.9974L21.7188 32.0591Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navigation;
