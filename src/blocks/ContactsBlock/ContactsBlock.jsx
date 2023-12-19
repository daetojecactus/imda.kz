import React from "react";
import "./ContactsBlock.scss";

const ContactsBlock = () => {
  return (
    <div className="contacts-block">
      <ul className="contacts-block__list list-reset">
        <li className="contacts-block__item">
          <a href="https://wa.me/77479111825" className="contacts-block__link">
            Whatsapp
          </a>
        </li>
        <li className="contacts-block__item">
          <a
            href="https://t.me/imdigitalagency"
            className="contacts-block__link"
          >
            Telegram
          </a>
        </li>
        <li className="contacts-block__item">
          <a
            href="https://www.instagram.com/im_digital_agency"
            className="contacts-block__link"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsBlock;
