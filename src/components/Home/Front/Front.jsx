import React from 'react'
import "./Front.css"
import ParticleAnimation from '../../Particles'
import Logo from "../../images/iqapex.png"

import Typewriter from 'typewriter-effect';

function Front() {



  return (
    <div className='front'>
    <ParticleAnimation/>
    <div className='main-logo'>
      <img src={Logo} alt='' style={{width:"25%"}}/>
  
        <div>
            <div className='iqapex-heading'>
                <h1 data-text="IQ Apex Labs">
                IQApex Labs
              </h1>
            </div>

          <div className='text-animator'>
          <p id='type'>
          <Typewriter
            options={{
              strings: ['your passion,our creation'],
              autoStart: true,
              loop: true,
              
            }}
          />
          </p>
          </div>
         
        </div>
    </div>

    </div>
  )
}

export default Front;