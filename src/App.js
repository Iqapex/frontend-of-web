
import Home from './components/Home/Home';
import Talent from './components/Home/Footer/Talent patnership/Talent';
import ProductionEngineering from './components/Home/Footer/Production Engineering/ProductionEngineering';
import Career from './components/Home/Footer/Careers/Career';
import OurProcess from './components/Home/Footer/Our Process/OurProcess';
import OurService from './components/Home/Footer/Our Services/OurService';
import ContactUs from './components/Home/Footer/Contact us/ContactUs';
import AboutUs from './components/Home/Footer/About us/AboutUs';
import Enterprise from './components/Home/Footer/Enterprise Soloution/Enterprise';
import Login from './pages/Login';
/* import Signup from './pages/Signup'; */


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/production-enginnering' element={<ProductionEngineering/>}/>
      <Route exact path='/EnterpriseSolution' element={<Enterprise/>}/>
      <Route exact path='/TalentPartnership' element={<Talent/>}/>
      <Route exact path='/ourServices' element={<OurService/>}/>
      <Route exact path='/OurProcess' element={<OurProcess/>}/>
      <Route exact path='/Career' element={<Career/>}/>
      <Route exact path='/ContactUs' element={<ContactUs/>}/>
      <Route exact path='/AboutUs' element={<AboutUs/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Login/>}/>
    </Routes>
    </Router>
   {/*  <Home/> */}
    </div>
  );
}

export default App;
