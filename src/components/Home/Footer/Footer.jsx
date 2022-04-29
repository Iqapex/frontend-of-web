import React from 'react'
import LinkedIn from "../../images/linkedin.svg";
import YouTube from "../../images/youtube.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import "./Footer.css"
import Logo from "../../images/iqapex.png";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer-div'>
      <div className='footer'>
      <div className='main-logo-footer'>
      <img src={Logo} alt='' style={{height:"10%", width:"10%"}}/>
        </div>
        <div class="footer-contents">
      <div className="expertise">
        <h4>
          Our Expertise
        </h4>
        <Link to="/production-enginnering" style={{textDecoration:"inherit"}}>
        <p>Production Engineering</p>
        </Link>
        <Link to="/EnterpriseSolution" style={{textDecoration:"inherit"}}> 
        <p>Enterprise Solutions</p>
       </Link>
       <Link to="/TalentPartnership" style={{textDecoration:"inherit"}}> 

        <p>Talent Partnership</p>
        </Link>
      </div>
      <div className='ContactUs'>
        <h4>
          Who are we
        </h4>
        <Link to="/AboutUs" style={{textDecoration:"inherit"}}>
        <p>
          About us
        </p>
        </Link>
        <Link to="/partners" style={{textDecoration:"inherit"}}>
       <p>
          partner with us
        </p>
       </Link>
    
      </div>
      <div className='AboutUs'>
        <h4>
          What we do
        </h4>
        <Link to="/ourServices" style={{textDecoration:"inherit"}}>
        <p>
          Our Services
        </p>
        </Link>
        <Link to="/OurProcess" style={{textDecoration:"inherit"}}>
        <p>
          Our Process
        </p>
        </Link>
     
      </div>

      <div className='AboutUs2'>
        <h4>
          Get in touch
        </h4>
        <Link to="/ContactUs" style={{textDecoration:"inherit"}}>
        <p>
          Contact us
        </p>
        </Link>
       <Link to="/Career" style={{textDecoration:"inherit"}}>
       <p>
          Careers
        </p>
       </Link>
       <Link to="/meeting" style={{textDecoration:"inherit"}}>
       <p>
          Schedule a meeting
        </p>
       </Link>
      
       <Link to="/join-business" style={{textDecoration:"inherit"}}>
       <p>
          Join Business Collaboration
        </p>
       </Link>
      </div>
      <div className='Social-media-footer'>
        <h4>
          Follow us on Socials
        </h4>
        <div className='image-social'>
          <img src={Facebook} style ={{width:30}} alt=''/>
          <img src={LinkedIn} style ={{width:30}}  alt=''/>
          <img src={YouTube} style ={{width:30}}  alt=''/>
          <img src={Instagram} style ={{width:30}}  alt=''/>
        </div>
      </div>
    </div>
      </div>   
     {/*  <div className="footer-down-image">
       <img src="	https://sp-ao.shortpixel.ai/client/to_auto,q_lossl…ontent/uploads/2020/08/Footer-Certification_1.png" alt=""/>
       <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossl…ontent/uploads/2020/08/Footer-Certification_2.png" alt=""/>
       <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossl…ontent/uploads/2020/08/Footer-Certification_3.png " alt=""/>
       <div>
           <h5><span>INDIA:</span></h5>
           <h5><span>USA:</span></h5>
           <h5><span>SINGAPORE:</span></h5>
       </div>
   </div>  */}
    </div>
  )
}

export default Footer
