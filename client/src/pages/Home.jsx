import styled from 'styled-components';

import {
  HeroSection,
  DemandeSection,
  FormationSection,
  ContactBar,
  Footer,
} from '../components';

const HomeContainer = styled.main``;

const Home = ({ onChangeselectedFormation }) => (
  <HomeContainer>
    <HeroSection />
    <DemandeSection />
    <FormationSection onChangeselectedFormation={onChangeselectedFormation} />
    <ContactBar />
    <Footer />
  </HomeContainer>
);

export default Home;
