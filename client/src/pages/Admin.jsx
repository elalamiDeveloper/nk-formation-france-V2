import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LogoutIcon, MoodIcon, MenuBookIcon } from '../utils/linksIcons';
import { NavListAdmin, ListClients, Logo } from '../components';

const AdminContainer = styled.div`
  display: flex;

  .admin-btns {
    background: #1a4264;
    display: flex;
    flex-direction: column;
    min-height: 60rem;

    button {
      background: transparent;
      color: #f0e6d1;
      padding: 1.5rem;
      transition: 0.3s;

      &:hover,
      &.active {
        background: #f0e6d1;
        color: #1a4264;
      }

      .logout {
        margin-top: auto;
      }

      * {
        font-size: 3.6rem;
      }
    }
  }
`;

const listClientNavBar = [
  'ajouter un client',
  'modifier un client',
  'supprimer un client',
];

const listFormationNavBar = [
  'ajouter une formation',
  'modifier une formation',
  'supprimer une formation',
];

const Admin = () => {
  const [listNavBar, setListNavBar] = useState([]);
  const [activeNavBar, setActiveNavBar] = useState('');
  const navigate = useNavigate();
  // navigate('/');

  const onClientHandler = () => setActiveNavBar('clients');
  const onFormationHandler = () => setActiveNavBar('formations');
  const onLogoutHandler = () => navigate('/');

  const onChangeNavListBarHandler = (e) => {
    console.log(clientsRef.current);
    // console.log(clientsRef.current.value);
    // console.log(iconRef.current.parentNode.value);
    // setListNavBar(list);
    // setActiveNavBar(clientsRef.current.value);
  };

  return (
    <AdminContainer>
      <aside className="admin-btns">
        <button className="clients" value="clients" onClick={onClientHandler}>
          <MoodIcon />
        </button>
        <button
          className="formations"
          value="foramtions"
          onClick={onFormationHandler}
        >
          <MenuBookIcon />
        </button>
        <button className="logout" value="logout" onClick={onLogoutHandler}>
          <LogoutIcon />
        </button>
      </aside>
      {activeNavBar === 'clients' ? <ListClients /> : 'FORMATIONS'}
    </AdminContainer>
  );
};

export default Admin;
