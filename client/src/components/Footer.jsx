import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { linkLogoImg } from '../assets';
import {
  CallIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../utils/linksIcons.js';

const FooterContainer = styled.footer`
  .footer-text {
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo-container {
      width: 12.5rem;
      display: none;
      visibility: hidden;
    }

    .footer-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .title {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #1a4264;
      }

      .information {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 1.8rem;
        color: #1a4264;
        font-weight: 500;

        .information-icon {
          font-size: 2.4rem;
          color: #1a4264;
        }
      }

      .social-media-icons {
        display: flex;
        gap: 2rem;

        a {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0;

          .social-media-icon {
            font-size: 6rem;
            color: #bb8f3a;
          }
        }
      }
    }
  }

  .footer-copyright {
    background: #1a4264;
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    color: #f0e6d1;
    text-align: center;

    span {
      font-weight: 700;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-text">
        <div className="logo-container" to="/">
          <img src={linkLogoImg} alt="logo" />
        </div>

        <div className="footer-item">
          <h3 className="title">Contact</h3>
          <div className="information">
            <CallIcon className="information-icon" />
            0782714754
          </div>

          <div className="information">
            <EmailIcon className="information-icon" />
            contact@nkformationfrance.fr
          </div>
        </div>

        <div className="footer-item">
          <h3 className="title">Nos Réseaux sociaux</h3>
          <div className="social-media-icons">
            <Link to="/">
              <FacebookIcon className="social-media-icon" />
            </Link>
            <Link to="/">
              <LinkedInIcon className="social-media-icon" />
            </Link>
            <Link to="/">
              <InstagramIcon className="social-media-icon" />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright © 2023 <span>NK Formation</span>. Politique de confidentialité
        Mentions légales.
      </p>
    </FooterContainer>
  );
};

export default Footer;
