import './App.css';
import About from './pages/About';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <Routes>
       <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          
       </Routes>
      
    </div>
    
  );
}

export default App;
