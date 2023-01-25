import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardFormationContainer = styled.div`
  width: 50rem;
  min-width: 50rem;
  height: 100%;
  background: #1a4264;
  box-shadow: 10px 10px #cca65c;
  padding: 2.5rem;
  border-radius: 0.5rem;
  color: #f0e6d1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .title-card {
    font-size: 2.6rem;
    padding: 1.5rem 1rem;
    border-left: 0.5rem solid #cca65c;
  }

  .sub-title {
    margin-left: 2rem;
    font-size: 2rem;
    position: relative;
    padding-left: 3rem;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #cca65c;
    }
  }

  .list-objectifs {
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
    gap: 1rem;

    .item-objectif {
      font-size: 1.4rem;
      line-height: 1.6;
      position: relative;
      padding-left: 3rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(3px);
        width: 1.5rem;
        height: 1.5rem;
        background: #cca65c;
      }
    }
  }

  a {
    border-radius: 0.5rem;
    font-size: 1.8rem;
    width: fit-content;
    margin: auto;
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    text-align: center;

    .title-card {
      font-size: 2.6rem;
      padding: 1.5rem 1rem;
      border-bottom: 0.5rem solid #cca65c;
      border-left: none;
    }

    .sub-title {
      margin-left: 0;
      border-bottom: 0.1rem solid #cca65c;
      padding-bottom: 0.5rem;
      margin: 0 3rem;
      padding-left: 0;

      &::before {
        display: none;
      }
    }

    .list-objectifs {
      margin-left: 1rem;
    }

    .item-objectif {
      position: relative;
      text-align: left;
    }
  }
`;

const CardFormation = ({ titre, preRequis, objectifs }) => {
  const itemObjectifsRender = objectifs.slice(0, 3);

  return (
    <CardFormationContainer>
      <h3 className="title-card">{titre}</h3>
      <h4 className="sub-title">Pré-requis</h4>
      <ul className="list-objectifs">
        {preRequis.map((preRequi, i) => (
          <li key={i} className="item-objectif">
            {preRequi}
          </li>
        ))}
      </ul>
      <h4 className="sub-title">Résultats attendus</h4>
      <ul className="list-objectifs">
        {itemObjectifsRender.map((objectif, i) => (
          <li key={i} className="item-objectif">
            {objectif}
          </li>
        ))}
      </ul>
      <Link to="/contact">Détails de la formation</Link>
    </CardFormationContainer>
  );
};

export default CardFormation;
