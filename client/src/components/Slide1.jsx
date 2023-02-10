import styled from 'styled-components';

import {
  linkHeroImg,
  linkQualiopiImg,
  linkBackgroundHeroImg1,
} from '../assets';

const Slide1Container = styled.div`
  height: 100%;
  min-height: 65rem;
  background: url(${linkBackgroundHeroImg1}) no-repeat center center/cover;
  padding: 2.5rem 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .text-container {
    h2 {
      font-size: 4.6rem;
      text-align: center;
      color: #1a4264;
    }
  }

  .images-container {
    margin: auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image-container {
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
    }

    .images-container {
      flex-direction: column;
      &.qualiop-image {
        img {
          width: 60%;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .text-container {
      font-size: 2.2rem;
    }
  }
`;

const Slide1 = () => {
  return (
    <Slide1Container>
      <div className="container">
        <div className="text-container">
          <h2>VOTRE ORGANISME DE FORMATION AGREE PAR L'ETAT</h2>
        </div>

        <div className="images-container">
          <div className="image-container qualiop-image">
            <img src={linkQualiopiImg} alt="qualiop" />
          </div>

          <div className="image-container hero-image">
            <img src={linkHeroImg} alt="pc and phone" />
          </div>
        </div>
      </div>
    </Slide1Container>
  );
};

export default Slide1;
