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
      <p className="footer-copyright">
        Copyright © 2023 <span>NK Formation</span>. Politique de confidentialité
        Mentions légales.
      </p>
    </FooterContainer>
  );
};

export default Footer;
