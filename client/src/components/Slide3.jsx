import styled from 'styled-components';

import { linkBackgroundHeroImg2 } from '../assets';

const Slide3Container = styled.div`
  height: 100%;
  min-height: 65rem;
  background: url(${linkBackgroundHeroImg2}) no-repeat center center/cover;
  padding: 2.5rem 0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }

  h2 {
    font-size: 5.4rem;
    text-align: center;
    color: #1a4264;
    margin-bottom: 5rem;
  }

  p {
    font-size: 2.6rem;
    line-height: 1.4;
    font-weight: 500;
    color: #1a4264;
    position: relative;
    padding-left: 5rem;

    &::before {
      content: '';
      position: absolute;
      top: 1.3rem;
      left: 2.5rem;
      width: 1rem;
      height: 1rem;
      background: #1a4264;
      border-radius: 50%;
    }
  }
`;

const Slide3 = () => {
  return (
    <Slide3Container>
      <div className="container">
        <h2>E-LEARNING</h2>

        <p>
          VOUS POUVEZ SUIVRE VOTRE FORMATION A VOTRE RYTHME A PARTIR D'UNE
          CONNEXION INTERNET UNIQUEMENT. VOUS AVEZ DU TEMPS LIBRE ?<br />
          CONNECTEZ VOUS ET AVANCEZ DANS VOTRE FORMATION. AUCUNE CONTRAINTE
          D'HORAIRE ET DE LIEU!
        </p>

        <p>
          NOTRE PLATEFORME EST EQUIPEE D'UN CHAT POUR COMMUNIQUER AVEC NOS
          FORMATEURS AUX JEURES D'OUVERTURES
        </p>
      </div>
    </Slide3Container>
  );
};

export default Slide3;
