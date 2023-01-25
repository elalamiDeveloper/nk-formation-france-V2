import styled from 'styled-components';

import { NavBarLink } from '../utils/linksComponents';

const NavBarContainer = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }

  @media screen and (max-width: 1070px) {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    clip-path: inset(0 0 100% 0);
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

    ul {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      background: rgba(240, 230, 209, 0.8);
    }

    &.hidden {
      clip-path: inset(0 0 0 0);
    }
  }
`;

const NavBar = ({ hideNavBar }) => {
  const links = [
    { value: 'Accueil', path: '/' },
    { value: 'Catalogue de formation', path: '/formations' },
    { value: 'Nous contacter', path: '/contact' },
    { value: 'Qui sommes nous ?', path: '/about-us' },
    { value: 'Mon espace', path: '/login' },
  ];

  return (
    <NavBarContainer className={hideNavBar ? 'hidden' : ''}>
      <ul className={`navbar-list `}>
        {links.map(({ value, path }, i) => (
          <NavBarLink key={i} value={value} path={path} />
        ))}
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
