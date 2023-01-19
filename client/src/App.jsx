import { Routes, Route } from 'react-router-dom';

import { Home } from './utils/linksPages';
import { Header } from './utils/linksComponents';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </>
);

export default App;
