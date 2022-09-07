import React from "react";
import logoInstagram from "../img/instagram.png";
import logoFacebook from "../img/facebook.png";
import logoWhatsapp from "../img/whatsapp.png";

const Footer = () => {
  return (
    <>
      <footer>
        <h2>Encontranos en</h2>
        <ul>
          <li>
            <img src={logoFacebook} alt="" />
            <p>Ver Facebook</p>
          </li>
          <li>
            <img src={logoWhatsapp} alt="" />
            <p>Ver Whatsapp</p>
          </li>
          <li>
            <img src={logoInstagram} alt="" />
            <p>Ver Instagram</p>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1662529988144!6m8!1m7!1sp67Zn1Hq4ANF5twJCKD4wg!2m2!1d-34.57037580024947!2d-58.61596823082115!3f88.56128772187478!4f-1.3636156776818922!5f0.7820865974627469"
          width="600"
          height="450"
          title="local"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          disableDefaultUI="true"
        ></iframe>
      </footer>
    </>
  );
};

export default Footer;
