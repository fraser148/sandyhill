import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';
import Services from './Services';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
      <ScrollToTop>
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/contact">
            <Route path=":service" element={<Contact />} />
            <Route path="" element={<Contact />} />
          </Route>
          <Route path="/services" element={<Services />}/>
        </Routes>
      </ScrollToTop>
  );  
}

export default App;
