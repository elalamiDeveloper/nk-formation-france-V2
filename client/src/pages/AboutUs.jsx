import styled from 'styled-components';
import { Rotate, Zoom, Slide } from 'react-awesome-reveal';

import { ContactBar, Footer } from '../components';
import { linkAboutUsImg } from '../assets';

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;

  h1 {
    font-size: 4.6rem;
    color: #1a4264;
    margin-bottom: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  img {
    border-radius: 0.5rem;
    overflow: hidden;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    h1 {
      text-align: center;
      margin-bottom: 5rem;
    }

    p {
      font-size: 2.2rem;
    }

    .img {
      order: -1;
    }
  }
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer className="container section-padding">
        <div className="text">
          <Zoom>
            <h1>Qui sommes nous.</h1>
          </Zoom>
          <Slide>
            <p>
              <strong>NK FORMATION</strong> est un organisme certifié qualité
              par le Référentiel National Qualité Qualiopi (loi du 5 septembre
              2018, Décret n° 2019-565 du 6 juin 2019) pour la catégorie :
              Actions de formation. Toutes nos formations préparent à des
              certifications professionnelles ou blocs de compétences
              enregistrés dans les répertoires de la certification et reconnues
              par l'État.
            </p>
            <p>
              Chez <strong>NK FORMATION</strong>, nous pensons que la formation
              ne doit pas être une contrainte et doit parfaitement s’adapter à
              votre situation professionnelle et personnelle. Ainsi, notre
              équipe travaille chaque jour afin de vous proposer la meilleure
              expérience en termes de e-learning et coaching individualisé. Nos
              formations certifiantes et éligibles CPF sont sélectionnées parmi
              les plus demandées du digital et vous permettent de faire évoluer
              votre carrière. Nos experts vous accompagnent du début de votre
              formation jusqu’au passage de la certification pour vous permettre
              de vous former sereinement.
            </p>
          </Slide>
        </div>
        <Rotate direction="left">
          <div className="img">
            <img src={linkAboutUsImg} alt="men with pc" />
          </div>
        </Rotate>
      </AboutUsContainer>
      <ContactBar fixed={true} />
      <Footer fixed={true} />
    </>
  );
};

export default AboutUs;
