import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

import { Admin } from './pages';

import {
  Home,
  Formation,
  Contact,
  AboutUs,
  Login,
  Client,
  DetailsFormation,
} from './pages';
import { Header } from './components';
import { useState } from 'react';
import { useEffect } from 'react';
import apiURL from './utils/apiURL';

const App = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [formationSelected, setFormationSelected] = useState({
    _id: '',
    titre: '',
    duration: '',
    public: [],
    groupe: '',
    preRequis: [],
    objectifs: [],
    chapitres: [],
  });

  useEffect(() => {
    const takeClientData = async () => {
      const browser = isBrowser ? `${navigator.userAgent}` : 'Unknown';
      const device = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';

      await axios.post(`${apiURL}/visits`, {
        ip: browser,
        country: device,
      });
    };

    takeClientData();
  }, []);

  useEffect(() => {
    formationSelected._id && navigate('/detail-foramtion');
  }, [formationSelected]);
  // useEffect(() => navigate('/'), []);

  const onChangeselectedFormation = (formation) =>
    setFormationSelected(formation);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home onChangeselectedFormation={onChangeselectedFormation} />
          }
        ></Route>
        <Route
          path="/formations"
          element={
            <Formation onChangeselectedFormation={onChangeselectedFormation} />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/client" element={<Client />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route
          path="/detail-foramtion"
          element={<DetailsFormation formation={formationSelected} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
