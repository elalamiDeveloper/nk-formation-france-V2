import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Slide1, Slide2, Slide3, Slide4 } from './';

const HeroSectionContainer = styled.div`
  overflow: hidden;
  position: relative;

  .indicators {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);

    li {
      button.each-slideshow-indicator {
        width: 50rem;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Slide scale={0.3} indicators={true} autoplay={true}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </Slide>
    </HeroSectionContainer>
  );
};

export default HeroSection;
