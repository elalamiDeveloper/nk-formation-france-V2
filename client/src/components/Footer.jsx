import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  &.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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

const Footer = ({ fixed }) => {
  return (
    <FooterContainer className={fixed && 'fixed'}>
      <p className="footer-copyright">
        Copyright © 2023 <span>NK Formation</span>. Politique de confidentialité
        Mentions légales.
      </p>
    </FooterContainer>
  );
};

export default Footer;
