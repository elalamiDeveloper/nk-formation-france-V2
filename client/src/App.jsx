import { Routes, Route } from 'react-router-dom';

import { Home, Formation, Contact, AboutUs, Login } from './pages';
import { Header, Footer, ContactBar } from './components';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/formations" element={<Formation />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    <ContactBar />
    <Footer />
  </>
);

export default App;
