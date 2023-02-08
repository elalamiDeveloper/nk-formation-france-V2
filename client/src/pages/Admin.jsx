import { useState } from 'react';
import styled from 'styled-components';

import { LogoutIcon, MoodIcon, MenuBookIcon } from '../utils/linksIcons';
import { NavListAdmin } from '../components';

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

  const onChangeNavListBarHandler = (list) => {
    setListNavBar(list);
    setActiveNavBar('client');
  };

  return (
    <AdminContainer>
      <aside className="admin-btns">
        <button
          className="clients"
          onClick={() => onChangeNavListBarHandler(listClientNavBar)}
        >
          <MoodIcon />
        </button>
        <button
          className="formations"
          onClick={() => onChangeNavListBarHandler(listFormationNavBar)}
        >
          <MenuBookIcon />
        </button>
        <button className="logout">
          <LogoutIcon />
        </button>
      </aside>
      <NavListAdmin
        listNavBar={listNavBar}
        hidden={activeNavBar ? false : true}
      />
      <div className="content">Content</div>
    </AdminContainer>
  );
};

export default Admin;
