import styled from 'styled-components';
import { JackInTheBox } from 'react-awesome-reveal';

import { CardFormation } from './';

const ListFormationContainer = styled.ul`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 7.5rem;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ListFormations = ({ formations, onChangeselectedFormation }) => {
  return (
    <ListFormationContainer className="list-card-formation">
      {formations.map((formation) => (
        <JackInTheBox key={formation._id}>
          <CardFormation
            formation={formation}
            onChangeselectedFormation={onChangeselectedFormation}
          />
        </JackInTheBox>
      ))}
    </ListFormationContainer>
  );
};

export default ListFormations;
