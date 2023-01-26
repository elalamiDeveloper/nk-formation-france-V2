import { Routes, Route } from 'react-router-dom';

import { Home, Formation, Contact } from './pages';
import { Header } from './components';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/formations" element={<Formation />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </>
);

export default App;
