import styled from 'styled-components';

import { linkLogoImg } from '../assets';

const LogoContainer = styled.div`
  width: 12.5rem;
`;

const Logo = () => (
  <LogoContainer>
    <img src={linkLogoImg} alt="logo nk-formation" />
  </LogoContainer>
);

export default Logo;
