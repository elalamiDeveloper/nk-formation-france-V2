import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Footer, ContactBar } from '../components';

import {
  SchoolSharpIcon,
  MenuBookSharpIcon,
  StarSharpIcon,
} from '../utils/linksIcons';

const DetailsFormationContainer = styled.div`
  padding: 5rem 0 0;

  .container {
    .main-container {
      padding: 5rem;
      background: #e4d0aa;
    }
  }

  .formation-title {
    position: relative;
    z-index: 5rem;
    font-size: 5.8rem;
    padding: 1rem;
    color: #e4d0aa;
    background: #1a4264;
    text-align: center;
    border-bottom: 0.5rem solid #e4d0aa;
    box-shadow: 0px 10px 9px rgba(0, 0, 0, 0.75);
    border-radius: 0.5rem;
  }

  .formation-title-seconde {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    font-size: 4.2rem;
    color: #1a4264;
    margin: 3rem 0;

    svg {
      font-size: 4rem;
    }
  }

  .formation-title-third {
    font-size: 2.4rem;
    margin: 2.5rem 10rem 1rem;
    color: #1a4264;
    display: flex;
    gap: 1rem;
    align-items: center;

    svg {
      margin-top: 0.4rem;
      font-size: 3rem;
    }
  }

  ul {
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  p,
  span,
  li {
    font-size: 2.2rem;
    margin-left: 20rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0.9rem;
      left: -3rem;
      width: 1.5rem;
      height: 1.5rem;
      background: #1a4264;
      border-radius: 50%;
    }
  }

  span {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }

  .chapitre {
    h3 {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      svg {
        font-size: 4rem;
      }
    }
  }
`;

const DetailsFormation = ({ formation }) => {
  return (
    <>
      <DetailsFormationContainer>
        <div className="container">
          <h1 className="formation-title">{formation.titre}</h1>
          <div className="main-container">
            <h2 className="formation-title-seconde">
              <SchoolSharpIcon />
              Informations
            </h2>
            <h3 className="formation-title-third">
              <StarSharpIcon /> public
            </h3>
            <p>{formation.public}</p>
            <h3 className="formation-title-third">
              <StarSharpIcon /> duration
            </h3>
            <p>{formation.duration}</p>
            <h3 className="formation-title-third">
              <StarSharpIcon /> prérequis
            </h3>
            <p>{formation.preRequis.join(', ')}</p>
            <h2 className="formation-title-seconde">
              {' '}
              <SchoolSharpIcon /> Objectifs
            </h2>
            <ul>
              {formation.objectifs.map((objectif, i) => (
                <li key={i}>{objectif}</li>
              ))}
            </ul>
            <h2 className="formation-title-seconde">
              <SchoolSharpIcon /> Chapitres
            </h2>
            {formation.chapitres.map((chapitre, i) => (
              <div key={i} className="chapitre">
                <h3 className="formation-title-third">
                  <MenuBookSharpIcon />
                  Chapitre N° {chapitre.nbrChapitre} : {chapitre.titreChapitre}
                </h3>
                <ul>
                  {chapitre.partieChapitre.map((partie, i) => (
                    <li key={i}>{partie}</li>
                  ))}
                </ul>
                {chapitre.atelier && <span>Atelier: {chapitre.atelier}</span>}
              </div>
            ))}
          </div>
        </div>
      </DetailsFormationContainer>
      <ContactBar />
      <Footer />
    </>
  );
};

export default DetailsFormation;
