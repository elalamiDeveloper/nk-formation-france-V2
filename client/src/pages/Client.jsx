import { useState } from 'react';
import styled from 'styled-components';

import { KeyboardArrowDownIcon } from '../utils/linksIcons';

const ClientContainer = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;

  aside {
    border-right: 0.1rem solid #555;
    h2 {
      padding: 1.5rem 3rem;
      font-size: 2.4rem;
    }

    .section {
      h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem;
        font-size: 2rem;
        border-top: 0.1rem solid #555;
        border-bottom: 0.1rem solid #555;
        cursor: pointer;

        & .icon {
          font-size: 3.2rem;
          transition: 0.4s;

          &.rotate {
            transform: rotate(180deg);
          }
        }
      }

      ul {
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        background: red;
        transition: 0.3s;
        display: block;

        &.hidden {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          display: none;
        }

        li {
          padding: 1.5rem 3rem;
          font-size: 1.8rem;
        }
      }
    }
  }
`;

const Client = () => {
  const [hideVideos, setHideVideos] = useState(false);
  console.log(hideVideos);
  const onHideVideosListHandler = () => {
    setHideVideos((val) => !val);
  };

  return (
    <ClientContainer>
      <aside>
        <h2>Contenu du cour</h2>
        <div className="section">
          <h3 onClick={onHideVideosListHandler}>
            section 1: titre de section
            <KeyboardArrowDownIcon
              className={`icon ${hideVideos ? 'rotate' : ''}`}
            />
          </h3>
          <ul className={`${hideVideos ? 'hidden' : ''}`}>
            <li>video 1</li>
            <li>video 2</li>
            <li>video 3</li>
            <li>video 4</li>
          </ul>
        </div>

        <div className="section">
          <h3 onClick={onHideVideosListHandler}>
            section 2: titre de section{' '}
            <KeyboardArrowDownIcon
              className={`icon  ${hideVideos ? 'rotate' : ''}`}
            />
          </h3>
          <ul className={`${hideVideos ? 'hidden' : ''}`}>
            <li>video 1</li>
            <li>video 2</li>
            <li>video 3</li>
            <li>video 4</li>
          </ul>
        </div>

        <div className="section">
          <h3 onClick={onHideVideosListHandler}>
            section 3: titre de section{' '}
            <KeyboardArrowDownIcon
              className={`icon  ${hideVideos ? 'rotate' : ''}`}
            />
          </h3>
          <ul className={`${hideVideos ? 'hidden' : ''}`}>
            <li>video 1</li>
            <li>video 2</li>
            <li>video 3</li>
            <li>video 4</li>
          </ul>
        </div>
      </aside>
      <div className="video-container" width="320" height="240" controls>
        <video
          src="https://www.youtube.com/watch?v=UxIRq_bWE6I&t=282s"
          width="320"
          height="240"
          controls
        />
      </div>
    </ClientContainer>
  );
};

export default Client;
