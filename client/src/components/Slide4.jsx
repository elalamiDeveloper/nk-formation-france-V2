import styled from 'styled-components';

import { linkBackgroundHeroImg2 } from '../assets';

const Slide4Container = styled.div`
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
    font-size: 4.6rem;
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

const Slide4 = () => {
  return (
    <Slide4Container>
      <div className="container">
        <h2>VOTRE FORMATION SUR MESURE !!</h2>

        <p>
          NOS FORMATIONS CATALOGUE NE SONT PAS LES SEULES QUE NOUS POUVONS
          REALISER !!!
        </p>

        <p>
          GRACE A PLUS D'UNE CENTAINE DE PARTENAIRES NOUS POUVONS REALISER UNE
          FORMATION SUR MESURE A VOTRE DEMANDE !! <br /> N'HESITEZ PAS A NOUS
          CONTACTER UN CONSEILLER VOUS GUIDERA AU MIEUX DANS VOTRE BESOIN.
        </p>
      </div>
    </Slide4Container>
  );
};

export default Slide4;
