import { useState } from 'react';
import styled from 'styled-components';

import { MenuIcon } from '../utils/linksIcons';
import { Logo, NavBar } from './';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  position: sticky;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  z-index: 500;
  position: sticky;
  background: #f0e6d1;
  right: 0;
  left: 0;

  .burger-menu {
    display: none;
  }

  @media screen and (max-width: 1070px) {
    position: relative;

    .burger-menu {
      display: inline-block;
      font-size: 6.2rem;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .burger-menu:hover {
      transform: scale(1.1);
    }
  }
`;

const Header = () => {
  const [hideNavBar, setHideNavBar] = useState(false);

  const onToggleHandler = () => setHideNavBar((lastVal) => !lastVal);

  return (
    <HeaderContainer>
      <Logo />
      <NavBar hideNavBar={hideNavBar} />
      <MenuIcon className="burger-menu" onClick={onToggleHandler} />
    </HeaderContainer>
  );
};

export default Header;
