import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Reservation from './components/Reservation/Reservation';
import { Footer } from './components/Footer/Footer';
import About from './pages/About';
import Cars from './components/Car/Cars';
import Avis from './components/LesAvis/Avis';
import TagManager from 'react-gtm-module';

function App() {
  const [isValidRoute, setIsValidRoute] = useState(true);
  const tagManagerArgs = {
    gtmId: 'GTM-5JJM8GRN'
  };
  
  const handleInvalidRoute = () => {
    setIsValidRoute(false);
    return <Navigate to="/" />;
  };
  TagManager.initialize(tagManagerArgs);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<About exact />} />
        <Route path="/Voitures" element={<Cars exact />} />
        <Route path="/Reserver" element={<Reservation exact />} />
        <Route path="/Avis" element={<Avis exact />} />
        <Route path="*" element={isValidRoute ? <Navigate to="/" exact /> : handleInvalidRoute} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
