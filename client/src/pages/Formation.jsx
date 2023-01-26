import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { ListFormations } from '../components';

const FormationContainer = styled.div`
  background: #f0e6d1;

  .container {
    background: #e4d0aa;
    padding: 5rem;
  }

  .formation-title {
    font-size: 5.8rem;
    color: #1a4264;
    text-align: center;
    margin-bottom: 5rem;
    text-align: center;
  }

  .gender-item {
    h2 {
      font-size: 4.2rem;
      margin-bottom: 4rem;
      margin-top: 7rem;
      color: #1a4264;
      border: 0.3rem solid #1a4264;
      text-align: center;
    }
  }
`;

const Formation = () => {
  const [formations, setFormations] = useState([]);
  const formationsWeb = formations.filter(
    (formation) => formation.groupe === 'web'
  );

  const formationsPAO = formations.filter(
    (formation) => formation.groupe === 'pao'
  );

  const formationsBureautique = formations.filter(
    (formation) => formation.groupe === 'bureautique'
  );

  const formationsManagement = formations.filter(
    (formation) => formation.groupe === 'management'
  );

  useEffect(() => {
    const fetchFormations = async () => {
      const {
        data: { data },
      } = await axios.get('http://localhost:8000/api/v1/formations');

      setFormations(data.formations);
    };

    fetchFormations();
  }, []);

  return (
    <FormationContainer>
      <div className="container section-padding">
        <h1 className="formation-title">Catalogue de formations</h1>

        <div className="gender-item">
          <h2>Bureautique</h2>
          <ListFormations formations={formationsBureautique} />
        </div>

        <div className="gender-item">
          <h2>Management</h2>
          <ListFormations formations={formationsManagement} />
        </div>

        <div className="gender-item">
          <h2>Publication assistée par ordinateur (PAO)</h2>
          <ListFormations formations={formationsPAO} />
        </div>

        <div className="gender-item">
          <h2>Web</h2>
          <ListFormations formations={formationsWeb} />
        </div>
      </div>
    </FormationContainer>
  );
};

export default Formation;
