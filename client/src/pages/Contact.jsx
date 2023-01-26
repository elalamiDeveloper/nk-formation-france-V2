import styled from 'styled-components';
import { Zoom, Slide } from 'react-awesome-reveal';

import { ContactForm } from '../components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;

  .contact-page-text {
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.5rem;

    h1 {
      font-size: 4.6rem;
      color: #1a4264;
    }

    p {
      font-size: 2.2rem;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    h1 {
      align-self: center;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer className="section-padding container">
      <div className="contact-page-text">
        <Zoom left cascade>
          <h1>Nous contacter.</h1>
        </Zoom>

        <Slide>
          <p>
            Remplissez le formulaire et nos responsables pédagogiques vous
            répondront sous 30 min maximum !
          </p>
          <p>
            Ils vous guideront et vous aideront a trouver LA formation dont vous
            avez besoin.
          </p>
          <p>Si vous voulez joindre directement nos conseillers formations :</p>
          <p>
            Du lundi au vendredi, dont les jours fériés, de
            <strong> 9h à 19h</strong>
            <br /> <strong> 07 82 71 47 54 </strong>
          </p>
          <p>
            Par email : <strong>contact@nkformationfrance.fr</strong>
          </p>
          <p>
            Partenariat <br />
            Autres questions ?
          </p>
        </Slide>
      </div>

      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
