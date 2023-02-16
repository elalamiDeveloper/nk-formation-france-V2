import { useState } from 'react';
import styled from 'styled-components';

import { ArrowCircleDownIcon } from '../utils/linksIcons.js';

const OpcoItemContainer = styled.li`
  border: 1px solid #f0e6d1;
  color: #f0e6d1;

  .opco-name-container {
    padding: 3rem 6rem;
    display: flex;
    justify-content: space-between;
    background: #1a4264;
    cursor: pointer;

    .opco-name {
      font-size: 2.6rem;
    }

    .opco-name-icon {
      font-size: 4.2rem;
      transition: 0.3s;
    }

    &:hover .opco-name-icon {
      transform: translateY(5px);
    }
  }

  .idcc-list {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: block;
    display: block;
    transition: 0.4s;

    &.hidden {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      display: none;
    }

    .idcc-item {
      display: flex;
      justify-content: space-between;
      color: #f0e6d1;
      padding: 1.5rem 3rem;
      font-size: 2.2rem;
      background: #2f77b5;
      border: 1px solid #f0e6d1;
      cursor: pointer;

      .opco-name-icon {
        font-size: 3.8rem;
        transition: 0.3s;
      }

      &:hover .opco-name-icon {
        transform: translateY(5px);
      }
    }
  }
`;

const OpcoItem = ({
  opcosName,
  idccActive,
  _id,
  idcc,
  onOpenIdccHandler,
  onToogleTableHandler,
}) => {
  const onOpenIdccContainerHandler = () => {
    onOpenIdccHandler(_id);
  };

  return (
    <OpcoItemContainer>
      <div className="opco-name-container" onClick={onOpenIdccContainerHandler}>
        <h2 className="opco-name">{opcosName}</h2>
        <ArrowCircleDownIcon className="opco-name-icon" />
      </div>
      <ul className={`idcc-list ${idccActive ? '' : 'hidden'}`}>
        {idcc.map((item, i) => (
          <li key={i} className="idcc-item" onClick={onToogleTableHandler}>
            {item.idccNbr} - {item.libelle}{' '}
            <ArrowCircleDownIcon className="opco-name-icon" />
          </li>
        ))}
      </ul>
    </OpcoItemContainer>
  );
};

export default OpcoItem;
