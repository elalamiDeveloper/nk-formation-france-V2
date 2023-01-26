import styled from 'styled-components';

import { CallIcon, EmailIcon } from '../utils/linksIcons.js';

const ContactBarContainer = styled.div`
  padding: 2.5rem 5rem;
  background: #cca65c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  .contact-text {
    color: #333;

    .contact-title {
      color: #1a4264;
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }

    strong {
      display: inline-block;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }

    .contact-text-p {
      font-size: 1.4rem;
    }
  }

  .connect-links {
    display: flex;
    gap: 1.5rem;
  }

  a:link,
  a:visited {
    padding: 1rem 2.5rem;
    background: none;
    border: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: #f0e6d1;
    border: 0.2rem solid transparent;

    &.whatsapp-link {
      border-color: #03c100;
      background: #03c100;
    }

    &.facebook-link {
      border-color: #0a66c2;
      background: #1a6ed8;
    }

    &.linkedin-link {
      border-color: #0a66c2;
      background: #0a66c2;
    }

    &.instagram-link {
      border-color: #c13584;
      background: linear-gradient(
        45deg,
        #405de6,
        #5851db,
        #833ab4,
        #c13584,
        #e1306c,
        #fd1d1d
      );
    }
  }

  a:hover,
  a:active {
    transform: translateX(0);

    &.facebook-link:hover {
      color: #1a6ed8;
      background: #f0e6d1;
    }

    &.instagram-link:hover {
      color: #c13584;
      background: #f0e6d1;
    }

    &.whatsapp-link {
      color: #03c100;
      background: #f0e6d1;
    }

    &.linkedin-link {
      color: #0a66c2;
      background: #f0e6d1;
    }
  }

  a.call-icon {
    padding: 0;

    * {
      padding: 1.5rem;
      font-size: 7rem;
      color: #f0e6d1;
      background: #1a4264;
      border-radius: 50%;
      transition: 0.3s;
    }

    *:hover {
      transform: scale(1.1);
    }
  }

  .con {
    margin: 0 2rem;
    display: flex;
    gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    justify-content: space-around;

    .connect-links {
      display: none;
    }

    a.call-icon {
      display: inline-block;
    }
  }
`;

const ContactBar = () => {
  return (
    <ContactBarContainer>
      <div className="contact-text">
        <h2 className="contact-title">NK FORMATION</h2>
        <strong>9h à 19h du Lundi au Vendredi</strong>
        <p className="contact-text-p">Vous avez des questions ? </p>
        <p className="contact-text-p">
          Contactez-nous directement pour plus d'inforamtions !
        </p>
      </div>

      <div className="con">
        <a href="tel:+33782714754" className="call-icon">
          <CallIcon />
        </a>
        <a href="email:contact@nkformationfrance.fr" className="call-icon">
          <EmailIcon />
        </a>
      </div>

      <div className="connect-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/0782714754"
          className="connect-section-link whatsapp-link"
        >
          WhatsApp
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100088551595262"
          className="connect-section-link facebook-link"
        >
          Facebook
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/nk-formation/"
          className="connect-section-link linkedin-link"
        >
          Linkedin
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nkformation/"
          className="connect-section-link instagram-link"
        >
          Instagram
        </a>
      </div>
    </ContactBarContainer>
  );
};

export default ContactBar;
