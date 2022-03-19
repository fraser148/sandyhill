import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  );
}

export default App;
