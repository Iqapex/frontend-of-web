
import Home from './components/Home/Home';
import Talent from './components/Home/Footer/Talent patnership/Talent';
import ProductionEngineering from './components/Home/Footer/Production Engineering/ProductionEngineering';
import Career from './components/Home/Footer/Careers/Career';
import OurProcess from './components/Home/Footer/Our Process/OurProcess';
import OurService from './components/Home/Footer/Our Services/OurService';
import ContactUs from './components/Home/Footer/Contact us/ContactUs';
import AboutUs from './components/Home/Footer/About us/AboutUs';
import Enterprise from './components/Home/Footer/Enterprise Soloution/Enterprise';
import Join from './components/Home/Footer/Join_Business/Join';
import Partner from './components/Home/Footer/Partner/Partner';
import Schedule from './components/Home/Footer/Schedule_a_meeting/Schedule';
import Login from './pages/Login';
/* import Signup from './pages/Signup'; */
import Footer from './components/Home/Footer/Footer';
import "./App.css"
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
      <Route exact path='/join-business' element={<Join/>}/>
      <Route exact path ='/schedule' element={<Schedule/>}/>
      <Route exact path='partner_with_us' element={<Partner/>}/>
    </Routes>
    <Footer/>
    </Router>
   {/*  <Home/> */}
    </div>
  );
}

export default App;
