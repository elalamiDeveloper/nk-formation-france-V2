import styled from 'styled-components';

const NavListAdminContainer = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.3s;
  position: absolute;
  left: 6.5rem;

  &.hidden {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }

  li {
    font-size: 2.6rem;
    background: rgba(26, 66, 100);
    color: #f0e6d1;
    padding: 1.5rem 3rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: #f0e6d1;
      color: #1a4264;
    }
  }
`;

const NavListAdmin = ({ listNavBar, hidden }) => {
  const arrTest = ['test1', 'test2', 'test3', 'test4', 'test5'];
  return (
    <NavListAdminContainer className={hidden ? 'hidden' : ''}>
      {listNavBar.map((test) => (
        <li>{test}</li>
      ))}
    </NavListAdminContainer>
  );
};

export default NavListAdmin;
