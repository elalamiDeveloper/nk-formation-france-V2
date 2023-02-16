import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LogoutIcon, MoodIcon, MenuBookIcon } from '../utils/linksIcons';
import { NavListAdmin, ListClients, Logo, OpcosList } from '../components';

const AdminContainer = styled.div`
  display: flex;

  .admin-btns {
    background: #1a4264;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15.5rem);

    button {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: transparent;
      color: #f0e6d1;
      padding: 2.5rem;
      font-size: 2.2rem;
      font-weight: 600;
      transition: 0.3s;

      &:hover,
      &.active {
        background: #f0e6d1;
        color: #1a4264;
      }

      &.logout {
        margin-top: auto;
      }

      * {
        font-size: 3.8rem;
      }
    }
  }

  .content {
    flex: 1;
  }
`;

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const onChangeActiveMenuHandler = (e) => {
    console.log('CHange');
  };

  return (
    <AdminContainer>
      <aside className="admin-btns">
        <button onClick={onChangeActiveMenuHandler}>
          <MoodIcon />
          Client Pro
        </button>

        <button onClick={onChangeActiveMenuHandler}>
          <MenuBookIcon />
          Formations
        </button>

        <button onClick={onChangeActiveMenuHandler}>
          <MenuBookIcon />
          OPCO
        </button>

        <button className="logout">
          <LogoutIcon />
        </button>
      </aside>

      <div className="content">
        <OpcosList />
      </div>
    </AdminContainer>
  );

  // const [listNavBar, setListNavBar] = useState([]);
  // const [activeNavBar, setActiveNavBar] = useState('');
  // const navigate = useNavigate();

  // const onClientHandler = () => setActiveNavBar('clients');
  // const onFormationHandler = () => setActiveNavBar('formations');
  // const onLogoutHandler = () => navigate('/');

  // const onChangeNavListBarHandler = (e) => {
  //   console.log(clientsRef.current);
  // };

  // return (
  //   <AdminContainer>
  //     <aside className="admin-btns">
  //       <button className="clients" value="clients" onClick={onClientHandler}>
  //         <MoodIcon />
  //       </button>
  //       <button
  //         className="formations"
  //         value="foramtions"
  //         onClick={onFormationHandler}
  //       >
  //         <MenuBookIcon />
  //       </button>
  //       <button className="logout" value="logout" onClick={onLogoutHandler}>
  //         <LogoutIcon />
  //       </button>
  //     </aside>
  //     {activeNavBar === 'clients' ? <ListClients /> : 'FORMATIONS'}
  //   </AdminContainer>
  // );
};

export default Admin;
