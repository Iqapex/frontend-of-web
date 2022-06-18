import React,{useEffect} from 'react'
import "./Tree.css"
import TreeBg from "./tree.svg"
import Aos from "aos";
import "aos/dist/aos.css"
import App from "../../images/app development icon.svg";
//import Marquee from 'react-fast-marquee';
/* import Digital from "../../images/digital marketing icon.svg"
import Economics from "../../images/economics icon (1).svg"
import Iot from "../../images/internet-of-things 1.svg"
import Science from "../../images/science-research 1.svg";
import Ssc from "../../images/social science icon.svg" */

function Tree() {

  useEffect(()=>{
    Aos.init({duration:900});

    },[]);

  return (
    <div className='tree'>
    
    <div className='treeImg'>
    
   <img src={TreeBg}  alt=""/>
    </div>
    
   <div className='services'>
   
   <div className='service-heading'>
   {/* */}
   <h1 data-aos="fade-right">
       Our Services
     </h1>
   </div>
   <div className='services-contanier'>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>The process of creating apps that run on any mobile platform: Android and iOS.</p>
   </div>
   
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>Web-devlopment & Digital Marketing</h4>
   <p>Web development is the work involved in developing a website for the Internet or an intranet. </p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>Cloud Services</h4>
   <p>They works on datas . Instead of using the storage space on devices, your information is housed in virtual servers.</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>Social Science</h4>
   <p>Social Science is a major category of academic disciplines that study human society and social relationships.</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>Policy Research</h4>
   <p> Policy research provides an important, unique approach to analyzing the impact of policy issues.</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>Embedded System & IOT</h4>
   <p>Internet of Things can create information about the connected objects, analyze it, and make decisions.</p>
   </div>
   </div>

 <div>
   
 </div>
   </div>
    </div>
  )
}

export default Tree