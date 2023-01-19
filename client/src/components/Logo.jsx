import styled from 'styled-components';

import { linkLogo } from '../utils/linksAssets';

const LogoContainer = styled.div`
  width: 12.5rem;
`;

const Logo = () => (
  <LogoContainer>
    <img src={linkLogo} alt="logo nk-formation" />
  </LogoContainer>
);

export default Logo;
