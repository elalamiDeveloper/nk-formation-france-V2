import styled from 'styled-components';

import {
  linkOpcosImg,
  linkPoleEmploiImg,
  linkBackgroundHeroImg1,
} from '../assets';

const Slide2Container = styled.div`
  min-height: 65rem;
  height: 100%;
  background: url(${linkBackgroundHeroImg1}) no-repeat center center/cover;
  padding: 2.5rem 0;

  .text-container {
    h2 {
      font-size: 5.4rem;
      text-align: center;
      color: #1a4264;
    }
  }

  .images-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 2.5rem;

    span {
      font-size: 2.8rem;
      font-weight: 600;
      color: #f0e6d1;
      padding: 2.5rem;
      border-radius: 50%;
      background: #1a4264;
    }

    .image-container {
      border: 2rem solid #1a4264;
      border-radius: 0.8rem;
      overflow: hidden;

      &.qualiop-image {
        flex: 0.5;
      }

      &.hero-image {
        flex: 1;
        margin-right: -5rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .text-container {
      font-size: 2.8rem;
      margin-bottom: 10rem;
    }

    .images-container {
      .image-container {
        border: 1rem solid #1a4264;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .text-container {
      font-size: 2.2rem;
    }
  }
`;

const Slide2 = () => {
  return (
    <Slide2Container>
      <div className="container">
        <div className="text-container">
          <h2>
            GRACE A NOTRE AGREEMENT VOTRE FORMATION EST PRISE EN CHARGE A 100%
            PAR:
          </h2>
        </div>

        <div className="images-container">
          <div className="image-container opcos-image">
            <img src={linkOpcosImg} alt="opcos image" />
          </div>

          <span>ET</span>

          <div className="image-container pole-emploi-image">
            <img src={linkPoleEmploiImg} alt="pole emploi image" />
          </div>
        </div>
      </div>
    </Slide2Container>
  );
};

export default Slide2;
