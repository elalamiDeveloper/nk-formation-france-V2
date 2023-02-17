import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { LogoutIcon, MoodIcon, MenuBookIcon } from '../../utils/linksIcons';

const AdminSidebarContainer = styled.aside``;

const AdminSidebar = () => {
  return (
    <AdminSidebarContainer>
      <button>
        <MoodIcon />
        Client Pro
      </button>

      <button>
        <MenuBookIcon />
        Formations
      </button>

      <button>
        <MenuBookIcon />
        OPCO
      </button>

      <button className="logout">
        <LogoutIcon />
      </button>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;
