import { Routes, Route } from 'react-router-dom';

import { Home, Formation } from './pages';
import { Header } from './components';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/formations" element={<Formation />}></Route>
    </Routes>
  </>
);

export default App;
