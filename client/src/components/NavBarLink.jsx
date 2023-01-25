import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { JackInTheBox } from 'react-awesome-reveal';

const NavBarLinkContainer = styled.li`
  a:link,
  a:visited {
    text-transform: capitalize;
    box-shadow: none;
    padding: 1.5rem 3rem;
    background: #1a4264;
    color: #f0e6d1;
    font-size: 1.8rem;
    font-weight: 500;
    border: 0.2rem solid #cca65c;
    border-radius: 0.5rem;
    transition: 0.3s;
  }

  a:hover,
  a:active {
    color: #1a4264;
    background: #cca65c;
    border-color: #1a4264;
  }

  @media screen and (max-width: 1070px) {
    a:link,
    a:visited {
      padding: 2rem 4rem;
      background: none;
      color: #1a4264;
      width: 100%;
      text-align: center;
      border: none;
      border-radius: 0;
    }

    a:hover,
    a:active {
      color: #f0e6d1;
      background: #1a4264;
    }
  }
`;

const NavBarLink = ({ value, path }) => (
  <NavBarLinkContainer>
    <JackInTheBox>
      <Link to={path}>{value}</Link>
    </JackInTheBox>
  </NavBarLinkContainer>
);

export default NavBarLink;
