import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Slide, Zoom, JackInTheBox } from 'react-awesome-reveal';

import { linkDemandeSectionImg } from '../assets';

const DemandeSectionContainer = styled.section`
  background: #1a4264;

  .container {
    display: flex;
    align-items: center;

    .text-container {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
      color: #f0e6d1;

      .title {
        font-size: 4.6rem;
        /* margin-bottom: 2.5rem; */
      }

      .text {
        font-size: 2rem;
        line-height: 1.4;

        span {
          color: #cca65c;
          font-weight: 700;
        }
      }

      a:link,
      a:visited {
        text-transform: uppercase;

        font-size: 2.2rem;
        font-weight: 700;
        padding: 1.5rem 3rem;
        background: #bb8f3a;
        border-radius: 50px;
        border: 2px solid #f0e6d1;
        transition: 0.7s;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }

      a:hover,
      a:active {
        color: #1a4264;
        border-color: #bb8f3a;
        background: #f0e6d1;
        transform: translateY(-10px);
      }
    }

    .img-container {
      width: 40%;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media screen and (max-width: 1070px) {
    .container {
      flex-direction: column;
      gap: 5rem;

      .img-container {
        order: -1;
        width: 60%;
      }

      .text-container {
        width: 80%;
        text-align: center;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 550px) {
    .container {
      .img-container {
        width: 100%;
      }

      .text-container {
        .title {
          font-size: 3.4rem;
        }
      }
    }
  }
`;

const DemandeSection = () => {
  return (
    <DemandeSectionContainer className="section-padding ">
      <div className="container">
        <div className="text-container">
          <h2 className="title">
            Nouvelle année, nouvelles évolution de carrière
          </h2>

          <Slide>
            <p className="text">
              Atteingnez vos objectifs d'apprentissage et profitez de nos
              formations
              <span> GRATUITEMENT </span> via votre CPF
            </p>
          </Slide>

          <JackInTheBox>
            <Link to="/contact">Faire une demande</Link>
          </JackInTheBox>
        </div>

        <Zoom className="img-container">
          <img
            src={linkDemandeSectionImg}
            alt="deux filles travaille sur un pc"
          />
        </Zoom>
      </div>
    </DemandeSectionContainer>
  );
};

export default DemandeSection;
