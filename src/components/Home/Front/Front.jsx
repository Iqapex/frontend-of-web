import React from 'react'
import "./Front.css"
import ParticleAnimation from '../../Particles'
import Logo from "../../images/iqapex.png"
import Tilt from "react-vanilla-tilt"
import Typewriter from 'typewriter-effect';




function Front() {

/* var i=0;
var txt="your passion,our creation";
var speed=150;
function type(){
  document.getElementById("type").innerHTML+=txt.charAt(i);
  i++;
  setTimeout(type,speed);
}
type(); */
/* var messageArray=["your passion,our creation"];
var textPosition=0;
var speed=100;
const typewriter=()=>{
document.querySelector("#type").innerHTML=messageArray[0].substring(0,textPosition)+"<span>\u25ae</span>";

if(textPosition++ != messageArray[0].length)
setTimeout(typewriter,speed);

}
window.addEventListener("load", typewriter);
 */
/* const textDisplay = document.getElementById('type')
const phrases = ['your passion,our creation']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()

 */

  return (
    <div className='front'>
    <ParticleAnimation/>
    <div className='main-logo'>
    {/* <Tilt className="Tilt" options={{ max : 235 }} style={{ height:"25%", width:"25%",backdropFilter:"blur(20px)" }}> */}

      <img src={Logo} alt='' style={{width:"25%"}}/>
   {/*    <img src={Logo} alt='' style={{height:"25%", width:"25%"}}/> */}
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