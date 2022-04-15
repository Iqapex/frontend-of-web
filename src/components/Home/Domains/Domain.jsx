import React from 'react'
import "./Domain.css"
import App from "../../images/app development icon.svg"
import Digital from "../../images/digital marketing icon.svg"
import Economics from "../../images/economics icon (1).svg"
import Iot from "../../images/internet-of-things 1.svg"
import Science from "../../images/science-research 1.svg";
import Ssc from "../../images/social science icon.svg"

function Domain() {
  return (
   <div className='container'>

   {/* <h1>
       Our Domains
   </h1>
   <div className='flex-div'>
   <div className='hexagon'>
        <div className='shape'>
        <img src={App} alt="App devlopment"/>
        <div className='content'>
            <h2>
                App Devlopment
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div>
    <div className='hexagon'>
        <div className='shape'>
        <img src={Digital} alt="Digital marketing"/>
        <div className='content'>
            <h2>
                Digital marketing
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div>
    <div className='hexagon'>
        <div className='shape'>
        <img src={Economics} alt="Economics"/>
        <div className='content'>
            <h2>
                Economics
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div>
   </div>
   <div className='flex-div'>
   <div className='hexagon'>
        <div className='shape'>
        <img src={Iot} alt="IOT"/>
        <div className='content'>
            <h2>
                IOT
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div> <div className='hexagon'>
        <div className='shape'>
        <img src={Science} alt="Science"/>
        <div className='content'>
            <h2>
                Science
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div> <div className='hexagon'>
        <div className='shape'>
        <img src={Ssc} alt="Social Science"/>
        <div className='content'>
            <h2>
                Social Science
            </h2>
            <p>
                Something abount app-dev
            </p>
        </div>
        </div>
    </div>
   </div> */}
 <div className='domain-comp'>
        <div className="domain-icons"></div>
        <div className="domain-icons"></div>
        <div className="domain-icons"></div>
    </div>
    <div className='domain-comp'>
        <div className="clip-lines"></div>
        <div className="clip-lines"></div>
        <div className="clip-lines"></div>
    </div>
    <div className='domain-comp'>
        <div className="main-comp"></div>
    </div>
    <div className='domain-comp'>
        <div className="clip-lines-right"></div>
        <div className="clip-lines-right"></div>
        <div className="clip-lines-right"></div>
    </div>
    <div className='domain-comp'>
        <div className="domain-icons"></div>
        <div className="domain-icons"></div>
        <div className="domain-icons"></div>
    </div>
   </div>
  )
}

export default Domain