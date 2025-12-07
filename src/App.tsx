import { Routes, Route } from 'react-router-dom';
import SnowEffect from './components/Effects/SnowEffect';
import HomePage from './components/Pages/HomePage';
import DishDetail from './components/Pages/DishDetail';

function App() {
  return (
    <div className="App">
      <SnowEffect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dish/:id" element={<DishDetail />} />
      </Routes>
    </div>
  );
}

export default App;
