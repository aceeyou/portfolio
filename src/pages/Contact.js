import React from "react";
import Section from "../components/Section";
import style from "../styles/Contact.module.css";
import IntersectionOberserver from "../components/IntersectionOberserverContainer";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Section>
      <IntersectionOberserver>
        <div className={style.desktop_container}>
          <div className={style.container} id="contact">
            <img
              className={style.graphic1}
              src={require("../images/graphics/squigly2.png")}
              alt="graphic"
            />
            <img
              className={style.graphic2}
              src={require("../images/graphics/dot-circle.png")}
              width={60}
              alt="graphic"
            />
            <img
              className={style.graphic3}
              src={require("../images/graphics/rounds3.png")}
              width={60}
              alt="graphic"
            />
            <article className={style.contactme_section}>
              <div className={style.image_container}>
                <img
                  className={style.ace_portrait}
                  src={require("../images/ace/ace-photo-3.png")}
                  alt="ace saying 'hire me'"
                />
              </div>
              <div className={style.contact_information}>
                <h1 className={style.hire_me}>Hire me! 🤝</h1>

                <div className={style.resume_btn_container}>
                  <button
                    tabIndex={0}
                    className={style.resume_btn}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1N5vJ9RLsgal7as2evjXo0JyLJwVSjOEx/view?usp=sharing"
                      )
                    }
                  >
                    View Resume
                  </button>
                </div>
                <div className={style.social_links_container}>
                  <h3 className={style.social_links_title}>Social Links</h3>
                  <a
                    className={style.social_link}
                    href="https://www.linkedin.com/in/ace-arwin-logronio/"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    className={style.social_link}
                    href="https://github.com/aceeyou"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    className={style.social_link}
                    href="https://www.facebook.com/AceArwin.Logronio/"
                  >
                    <FaFacebook size={30} />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <ContactForm />
        </div>
      </IntersectionOberserver>
    </Section>
  );
}

export default Contact;
