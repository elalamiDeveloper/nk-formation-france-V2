import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { ListFormations } from './';

const FormationSectionContainer = styled.div`
  .container {
    background: #e4d0aa;

    .title {
      font-size: 4.6rem;
      text-align: center;
      color: #1a4264;
      margin-bottom: 1.5rem;
    }

    .sous-title {
      display: inline-block;
      width: 100%;
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 9rem;
    }
  }
`;

const FormationSection = ({ onChangeselectedFormation }) => {
  const [formations, setFormations] = useState([]);
  const formationsRended =
    formations.length === 0 ? [] : formations.slice(0, 2);

  useEffect(() => {
    const fetchFormations = async () => {
      const {
        data: { data },
      } = await axios.get(
        'https://nk-formation-france-v2.onrender.com/api/v1/formations'
      );

      setFormations(data.formations);
    };

    fetchFormations();
  }, []);

  return (
    <FormationSectionContainer>
      <div className="container section-padding">
        <h2 className="title">
          Acquérir des compétences professionnelles recherchées
        </h2>

        <span className="sous-title">
          Faite votre choix parmis nos cours en ligne...
        </span>

        <ListFormations
          formations={formationsRended}
          onChangeselectedFormation={onChangeselectedFormation}
        />
      </div>
    </FormationSectionContainer>
  );
};

export default FormationSection;
