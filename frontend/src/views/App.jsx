import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';
import Services from './Services';
import PrivacyPolicy from './PrivacyPolicy';
import ScrollToTop from '../components/ScrollToTop';
import Registration from './Registration';
import OnlinePhysio from './OnlinePhysio';

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
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/online-physiotherapy" element={<OnlinePhysio/>}/>
        </Routes>
      </ScrollToTop>
  );  
}

export default App;
