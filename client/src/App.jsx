import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { Header } from './components';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </>
);

export default App;
