import React,{useEffect} from 'react'
import "./Tree.css"
import TreeBg from "./tree.svg"
import Aos from "aos";
import "aos/dist/aos.css"
import App from "../../images/app development icon.svg"
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
   <p>Something about App devlopment</p>
   </div>
   
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>Something about App devlopment</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>Something about App devlopment</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>Something about App devlopment</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>Something about App devlopment</p>
   </div>
   <div className='service-card'>
   <div className='mid-img'>
   <img src={App} alt=''/>
   </div>
   <h4>App-devlopment</h4>
   <p>Something about App devlopment</p>
   </div>
   </div>

 <div>
   
 </div>
   </div>
    </div>
  )
}

export default Tree