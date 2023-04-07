import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Catalog from './pages/Catalog.js';
import ProductDetails from './pages/ProductDetails.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path='details/:productId' element={<ProductDetails />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
