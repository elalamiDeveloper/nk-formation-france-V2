import styled from 'styled-components';

import { HeroSection, DemandeSection, FormationSection } from '../components';

const HomeContainer = styled.main``;

const Home = () => (
  <HomeContainer>
    <HeroSection />
    <DemandeSection />
    <FormationSection />
  </HomeContainer>
);

export default Home;
