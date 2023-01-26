import { useState } from 'react';
import styled from 'styled-components';

import { InputItem } from './';

const ContactFormContainer = styled.div`
  padding: 5rem;
  background: #1a4264;
  color: #f0e6d1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  border-radius: 1.5rem;

  h3 {
    font-size: 3.2rem;
    grid-column: 1/-1;
  }

  .input-item {
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;
    gap: 0.5rem;

    label {
      font-size: 1.8rem;
      font-weight: 600;
    }

    textarea {
      resize: none;
      padding: 1.5rem;
      font-size: 2rem;
      border: 0.3rem solid #cca65c;
      border-radius: 0.5rem;
      outline: none;
      min-height: 15rem;
      color: #1a4264;
      font-weight: 700;
    }
  }

  button {
    grid-column: 1/-1;
    padding: 1.5rem;

    border-radius: 0.5rem;
  }

  @media screen and (max-width: 1000px) {
    .contact-page-form {
      width: 100%;
    }
  }

  @media screen and (max-width: 760px) {
    .contact-page-form {
      grid-template-columns: 1fr;
    }

    .input-team {
      gap: 1rem;
      font-size: 2.2rem;
    }

    .input-team label {
      font-size: 1.8rem;
    }
  }
`;

const ContactForm = () => {
  const [inputFields, setInputFields] = useState({
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    formationSouhaite: '',
    soldeCPF: '',
    dateRappel: '',
    heureRappel: '',
    message: '',
  });

  const {
    prenom,
    nom,
    email,
    tel,
    formationSouhaite,
    soldeCPF,
    dateRappel,
    heureRappel,
    message,
  } = inputFields;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputFields((lastInputFields) => ({
      ...lastInputFields,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const newContact = { ...inputFields, id: newId };
    addUser(newContact);

    setInputFields({
      prenom: '',
      nom: '',
      email: '',
      tel: '',
      formationSouhaite: '',
      soldeCPF: '',
      dateRappel: '',
      heureRappel: '',
      message: '',
    });
  };

  return (
    <ContactFormContainer
      className="contact-page-form"
      onSubmit={onSubmitHandler}
    >
      <h3>Écrivez-nous.</h3>

      <InputItem
        label="Prénom"
        name="prenom"
        type="text"
        value={prenom}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Nom"
        name="nom"
        type="text"
        value={nom}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Email"
        name="email"
        type="email"
        value={email}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Numéro de téléphone"
        name="tel"
        type="tel"
        value={tel}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Formation Souhaitée"
        name="formationSouhaite"
        type="text"
        value={formationSouhaite}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Votre Solde CPF"
        name="soldeCPF"
        type="text"
        value={soldeCPF}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Date du Rappel"
        name="dateRappel"
        type="date"
        value={dateRappel}
        onChangeHandler={onChangeHandler}
      />

      <InputItem
        label="Heure du Rappel"
        name="heureRappel"
        type="time"
        value={heureRappel}
        onChangeHandler={onChangeHandler}
      />

      <div className="input-item">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          value={message}
          id="message"
          onChange={onChangeHandler}
          required
        ></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </ContactFormContainer>
  );
};

export default ContactForm;
