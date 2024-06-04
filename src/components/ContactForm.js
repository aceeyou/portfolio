import React, { useRef, useState } from "react";
import style from "../styles/ContactForm.module.css";
import IntersectionOberserver from "./IntersectionOberserverContainer";

import emailjs from "@emailjs/browser";

function InputItem({ label, type = "text", required, data, setData, name }) {
  return (
    <div className={style.input__container}>
      <input
        className={style.input__input}
        type={type}
        name={name}
        autoComplete="off"
        autoCorrect="off"
        textvalue={data}
        value={data}
        onChange={(e) => setData(e.target.value)}
        required={required}
        id={name}
        aria-label={name}
      />
      <label className={style.input__label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 1000);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        console.log("SUCCESS!");
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
        return;
      })
      .catch((error) => console.log("Failed to send... ", error));
  }

  return (
    <IntersectionOberserver>
      <article className={style.form__container}>
        <form ref={form} className={style.form} onSubmit={sendEmail}>
          <h1 className={style.form__heading}>Send me a message! 📫</h1>
          <InputItem
            label={"Name"}
            name="user_name"
            required
            setData={setName}
            data={name}
          />

          <InputItem
            label={"Email"}
            name="user_email"
            type={"email"}
            required
            setData={setEmail}
            data={email}
          />
          <div className={style.form__textarea_container}>
            <textarea
              className={style.form__textarea}
              rows={8}
              cols={38}
              name="message"
              required
              id={"message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label className={style.label__message} htmlFor="message">
              Message
            </label>
          </div>
          <div className={style.submit__container}>
            {isLoading ? (
              <div className={style.form__loader__container}>
                <div className="loader"></div>
              </div>
            ) : (
              <input
                className={style.form__submit}
                type="submit"
                value="Send Message"
              />
            )}
          </div>
        </form>
      </article>
    </IntersectionOberserver>
  );
}

export default ContactForm;
