import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import {
  linkBackgroundHeroImg1,
  linkBackgroundHeroImg2,
  linkHeroImg,
  linkQualiopiImg,
  linkOpcosImg,
  linkPoleEmploiImg,
} from '../assets';

const HeroSectionContainer = styled.div`
  min-height: 68.5rem;
  background-size: cover;
  background-position: center center;
  padding: 3rem 7.5rem;
  position: relative;

  .before {
    cursor: pointer;
    position: absolute;
    clip-path: polygon(
      40% 0%,
      40% 20%,
      100% 20%,
      100% 80%,
      40% 80%,
      40% 100%,
      0% 50%
    );
    width: 80px;
    height: 60px;
    background: #cca65c;
    top: 50%;
    left: 10px;
  }

  .after {
    z-index: 1;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );

    width: 80px;
    height: 60px;
    background: #cca65c;
    top: 50%;
    right: 10px;
  }

  .slide-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1a4264;

    .text-container {
      h1 {
        text-align: center;
        font-size: 6.4rem;
        font-weight: 600;
      }
    }

    .imgs-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .img-container {
        flex: 1;
        &.hero-img {
          img {
            width: 120% !important;
          }
        }

        &.qualiop-img {
          img {
            width: 50% !important;
            margin: auto;
          }
        }
      }
    }
  }

  .slide-2 {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    h2 {
      font-size: 4rem;
      max-width: 80%;
      text-align: center;
      color: #1a4264;
      padding-right: 8rem;
    }

    .img-container {
      display: flex;
      gap: 2.5rem;
      justify-content: center;
      align-items: center;

      span {
        font-size: 3.2rem;
        font-weight: 700;
        color: #f0e6d1;
        padding: 2.5rem;
        border-radius: 50%;
        background: #1a4264;
      }

      .imgs {
        border: 2rem solid #1a4264;
        border-radius: 1rem;
      }
    }
  }

  .slide-3 {
    width: calc(100vw - 10rem);
    margin: auto;
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 5rem;

    h2 {
      font-size: 7.2rem;
      padding: 2.5rem;
      border-radius: 1rem;
      color: #f6f6f6;
      background: #1a4264;
    }

    p {
      font-size: 4.2rem;
      font-weight: 600;
      line-height: 1.4;
      color: #1a4264;
      padding-left: 5rem;
      margin-right: auto;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 1.2rem;
        left: 3rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #1a4264;
      }
    }
  }

  .slide-4 {
    width: calc(100vw - 10rem);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    h2 {
      font-size: 7rem;
      text-align: center;
      padding: 2.5rem;
      border-radius: 1rem;
      color: #f6f6f6;
      background: #1a4264;
    }

    p {
      font-size: 4.6rem;
      font-weight: 600;
      line-height: 1.4;
      color: #1a4264;
      padding-left: 5rem;
      margin-right: auto;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #1a4264;
      }

      &.p-2 {
        font-weight: 700;
      }
    }
  }

  .pnts {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    .pnt {
      width: 2rem;
      height: 2rem;
      background: #333;
      border-radius: 50%;

      &.active {
        background: #cca65c;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .slide-1 {
      .imgs-container {
        flex-direction: column;

        .img-container {
          &.hero-img {
            img {
              width: 100% !important;
            }
          }

          &.qualiop-img {
            img {
              width: 100% !important;
              margin: 0;
            }
          }
        }
      }
    }
  }
`;

const HeroSection = () => {
  const [slideActive, setSlideActive] = useState(1);
  const onChangeSlideActiveHandler = (e) => setSlideActive(+e.target.id);
  const onReduceSlideActive = (e) => {
    if (slideActive >= 4) return;
    console.log(slideActive);
    setSlideActive((lastSlideActive) => lastSlideActive + 1);
  };
  const onAddSlideActive = (e) => {
    if (slideActive <= 1) return;
    console.log(slideActive);
    setSlideActive((lastSlideActive) => lastSlideActive - 1);
  };

  const slideActiveHtml =
    slideActive === 1 ? (
      <div className="slide-1">
        <div className="text-container">
          <h1>VOTRE ORGANISME DE FORMATION AGREE PAR L'ETAT</h1>
        </div>

        <div className="imgs-container">
          <div className="img-container hero-img">
            <img src={linkHeroImg} alt="pc and phone" />
          </div>
          <div className="img-container qualiop-img">
            <img src={linkQualiopiImg} alt="qualiop" />
          </div>
        </div>
      </div>
    ) : slideActive === 2 ? (
      <div className="slide-2">
        <h2>
          GRACE A NOTRE AGREEMENT VOTRE FORMATION EST PRISE EN CHARGE A 100%
          PAR:
        </h2>

        <div className="img-container">
          <div className="imgs">
            <img src={linkOpcosImg} alt="opcos image" />
          </div>

          <span>ET</span>

          <div className="imgs">
            <img src={linkPoleEmploiImg} alt="pole emploi image" />
          </div>
        </div>
      </div>
    ) : slideActive === 3 ? (
      <div className="slide-3">
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
    ) : (
      <div className="slide-4">
        <h2>VOTRE FORMATION SUR MESURE !!!</h2>
        <p className="p-1">
          NOS FORMATIONS CATALOGUE NE SONT PAS LES SEULES QUE NOUS POUVONS
          REALISER !!!
        </p>

        <p className="p-2">
          GRACE A PLUS D'UNE CENTAINE DE PARTENAIRES NOUS POUVONS REALISER UNE
          FORMATION SUR MESURE A VOTRE DEMANDE !! <br /> N'HESITEZ PAS A NOUS
          CONTACTER UN CONSEILLER VOUS GUIDERA AU MIEUX DANS VOTRE BESOIN.
        </p>
      </div>
    );

  return (
    <HeroSectionContainer
      style={{
        backgroundImage: `url(${
          slideActive === 4 || slideActive === 3
            ? linkBackgroundHeroImg2
            : linkBackgroundHeroImg1
        })`,
      }}
    >
      <div className="before" onClick={onAddSlideActive} />
      <div className="after" onClick={onReduceSlideActive} />
      {slideActiveHtml}

      {/* style={{ transform: `translateX(-50rem)` }} */}

      {/* <div className="slide-1">
        <div className="text-container">
          <h1>VOTRE ORGANISME DE FORMATION AGREE PAR L'ETAT</h1>
          <div className="text-img-container">
            <img src={linkQualiopiImg} alt="qualiop" />
          </div>
        </div>
        <div className="image-container">
          <img src={linkHeroPcImg} alt="pc" className="pc" />
          <img src={linkHeroPhoneImg} alt="phone" className="phone" />
        </div>
      </div>

      <div className="slide-2">
        <h2>
          GRACE A NOTRE AGREEMENT VOTRE FORMATION EST PRISE EN CHARGE A 100%
          PAR:
        </h2>

        <div className="img-container">
          <div className="imgs">
            <img src={linkOpcosImg} alt="opcos image" />
          </div>

          <span>ET</span>

          <div className="imgs">
            <img src={linkPoleEmploiImg} alt="pole emploi image" />
          </div>
        </div>
      </div>

      <div className="slide-3">
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

      <div className="slide-4">
        <h2>VOTRE FORMATION SUR MESURE !!!</h2>
        <p className="p-1">
          NOS FORMATIONS CATALOGUE NE SONT PAS LES SEULES QUE NOUS POUVONS
          REALISER !!!
        </p>

        <p className="p-2">
          GRACE A PLUS D'UNE CENTAINE DE PARTENAIRES NOUS POUVONS REALISER UNE
          FORMATION SUR MESURE A VOTRE DEMANDE !! <br /> N'HESITEZ PAS A NOUS
          CONTACTER UN CONSEILLER VOUS GUIDERA AU MIEUX DANS VOTRE BESOIN.
        </p>
      </div>
*/}
      <div className="pnts">
        <div
          className={`pnt ${slideActive === 1 && 'active'}`}
          onClick={onChangeSlideActiveHandler}
          id="1"
        ></div>
        <div
          className={`pnt ${slideActive === 2 && 'active'}`}
          onClick={onChangeSlideActiveHandler}
          id="2"
        ></div>
        <div
          className={`pnt ${slideActive === 3 && 'active'}`}
          onClick={onChangeSlideActiveHandler}
          id="3"
        ></div>
        <div
          className={`pnt ${slideActive === 4 && 'active'}`}
          onClick={onChangeSlideActiveHandler}
          id="4"
        ></div>
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
