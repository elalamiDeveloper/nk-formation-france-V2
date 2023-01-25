import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { CardFormation, ListFormations } from '../components';

const FormationContainer = styled.div``;

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
    <FormationContainer className="formations-page container section-padding">
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
        <h2>Publication assistée par ordinateur (PAO)</h2>{' '}
        <ListFormations formations={formationsPAO} />
      </div>

      <div className="gender-item">
        <h2>Web</h2>
        <ListFormations formations={formationsWeb} />
      </div>
    </FormationContainer>
  );
};

export default Formation;
