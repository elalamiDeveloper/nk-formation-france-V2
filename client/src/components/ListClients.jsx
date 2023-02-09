import styled from 'styled-components';

import { Client } from './';
import { linkProfilImg } from '../assets';

const ListClientsContainer = styled.ul`
  padding: 5rem 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem 10rem;
  flex-wrap: wrap;
`;

const clients = [
  {
    name: 'name1',
    email: 'elalami.idriss@gmail.com',
    imgUrl: linkProfilImg,
  },

  {
    name: 'name2',
    email: 'elalami.idriss@gmail.com',
    imgUrl: linkProfilImg,
  },

  {
    name: 'name3',
    email: 'elalami.idriss@gmail.com',
    imgUrl: linkProfilImg,
  },

  {
    name: 'name4',
    email: 'elalami.idriss@gmail.com',
    imgUrl: linkProfilImg,
  },

  {
    name: 'name5',
    email: 'elalami.idriss@gmail.com',
    imgUrl: linkProfilImg,
  },
];

const ListClients = () => {
  return (
    <ListClientsContainer>
      {clients.map((client, i) => (
        <Client key={i} {...client} />
      ))}
    </ListClientsContainer>
  );
};

export default ListClients;
