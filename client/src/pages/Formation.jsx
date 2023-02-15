import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';

import { ListFormations, ContactBar, Footer } from '../components';

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
      padding: 1.5rem;
      font-size: 4.2rem;
      margin-bottom: 4rem;
      margin-top: 7rem;
      color: #f0e6d1;
      background-color: rgba(26, 66, 100, 0.9);
      text-align: center;
      border-radius: 0.5rem;
    }
  }
`;

const Formation = ({ onChangeselectedFormation }) => {
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
      } = await axios.get(
        'https://nk-formation-france-v2.onrender.com/api/v1/formations'
      );

      setFormations(data.formations);
    };

    fetchFormations();
  }, []);

  return (
    <FormationContainer>
      <div className="container section-padding">
        <h1 className="formation-title">Catalogue de formations</h1>

        <div className="gender-item">
          <Zoom>
            <h2>Bureautique</h2>
          </Zoom>
          <ListFormations
            formations={formationsBureautique}
            onChangeselectedFormation={onChangeselectedFormation}
          />
        </div>

        <div className="gender-item">
          <Zoom>
            <h2>Management</h2>
          </Zoom>
          <ListFormations
            formations={formationsManagement}
            onChangeselectedFormation={onChangeselectedFormation}
          />
        </div>

        <div className="gender-item">
          <Zoom>
            <h2>Publication assistée par ordinateur (PAO)</h2>
          </Zoom>
          <ListFormations
            formations={formationsPAO}
            onChangeselectedFormation={onChangeselectedFormation}
          />
        </div>

        <div className="gender-item">
          <Zoom>
            <h2>Web</h2>
          </Zoom>
          <ListFormations
            formations={formationsWeb}
            onChangeselectedFormation={onChangeselectedFormation}
          />
        </div>
      </div>

      <ContactBar />
      <Footer />
    </FormationContainer>
  );
};

export default Formation;
