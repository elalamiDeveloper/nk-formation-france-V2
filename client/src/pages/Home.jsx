import styled from 'styled-components';

import {
  HeroSection,
  DemandeSection,
  FormationSection,
  ContactBar,
  Footer,
} from '../components';

const HomeContainer = styled.main``;

const Home = () => (
  <HomeContainer>
    <HeroSection />
    <DemandeSection />
    <FormationSection />
    <ContactBar />
    <Footer />
  </HomeContainer>
);

export default Home;
