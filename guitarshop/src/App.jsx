
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandsPage from './pages/BrandsPage';
import GuitarModelsPage from './pages/GuitarModelsPage';
import GuitarDetailsPage from './pages/GuitarDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrandsPage />} />
        <Route path="/brand/:brandId" element={<GuitarModelsPage />} />
        <Route path="/brand/:brandId/model/:modelId" element={<GuitarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;