import React,{useEffect} from 'react'
import "./Companies.css";

import Img1 from "../../images/larvel.svg"
import Img2 from "../../images/Scientist.svg"
import Img3 from "../../images/Vue.svg";
import Img4 from "../../images/brick.jpg";
import Img5 from "../../images/comp-f.png";
import Img10 from "../../images/comp.png";
import Img6 from "../../images/comp-ff.png";
import Img7 from "../../images/comp-fff.png";
import Img8 from "../../images/comp-ffff.png";
import Img12 from "../../images/fcon.png";
import Img13 from "../../images/startup.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
/* 

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import LinkedIn from "../../images/linkedin.svg";
import YouTube from "../../images/youtube.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg"; */
import Aos from "aos";
import "aos/dist/aos.css";

function Companies() {

  useEffect(()=>{
    Aos.init({duration:900});

    },[]);

  return (
    <div className="Companies-div">
    <div className='align-comp'>
        <h1  data-aos="fade-left">
            Clients and Partners
        </h1>
        <div className='comp-container'>
        <div class="companies">
            <div class="company-contents">
              <img src={Img10} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img5} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img12} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img4} alt=""/>
            </div>
        </div>
        <div class="companies">
            <div class="company-contents">
            <img src={Img6} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img13} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img7} alt=""/>
            </div>
            <div class="company-contents">
            <img src={Img8} alt=""/>
            </div>
        </div>
        </div>
        <div className='Peoples-review'>
            <h1 data-aos="fade-right">
                What people say about us?
            </h1>
            <Carousel style={{"marginTop":"5%",height:"100%"}} >
  <Carousel.Item interval={2000}>
    <img  style={{height:400,width:400}}
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Meghana Hegde,IIM Kozhikode,India</h3>
      <p> I wish to convey my gratitude for providing this opportunity to intern with
            your organization. It was a pleasant experience and it helped me sharpen my research skills
            during this period. I also learned to use vital tools that are helpful for any type of research.
            I wish to thank Mr. Arjun Sir for constantly supporting me throughout the period and accommodating
            all my requests. I had a fruitful time with your organization.

      </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Ayush Chaudhary - IIT Indore - Full Stack Developer</h3>
      <p>It was a wonderful experience for me, and I have been able to learn a lot of new things during the time.Overall, I have been able to become a better version of myself, thanks to you.
      I directly worked under Arjun Sir and reported to him. He was very kind and cooperative and able to understand the problems faced by us very well. </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Harsh Sinha - IIT G - Full Stack Developer</h3>
      <p>I gained much knowledge from this intern and really enjoyed it. Mentors respond immediately and
      are very supportive.
      The innovative projects that your team demonstrates are really appreciable and unique of their own kind. Looking forward to working with your team with many such exciting products.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Simran Malik - Research (Nanotechnology)</h3>
      <p> <a href='https://blog.internshala.com/2021/11/pursuing-a-career-in-materials-science-taking-the-road-less-travelled/'>Pursuing a career in materials science: Taking the road less travelled | Internshala blog</a>
                </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Hrithik Ghatny - Oracle - System Engineer</h3>
      <p>
      Thank you team IQApex for the wonderful experience and opportunity that you had given me during the completion my Engg. degree. 
      I’ve learnt a lot & also grown my confidence in my professional life as well. Training as a newbie was a lot of work for you.
      Thank you for your time and patience during this internship.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Ananda  Mukherjee - M.Tech - CSE IIT G</h3>
      <p>
          Life in IQApex - we learnt how to build things from very basics to industrial level that can
          be used in the real world. Besides technical skills, we learnt how to work in a team and other 
          soft skills such as presenting your project, modeling it, and so on. Mr. Arjun Sir we found a great teacher, 
          mentor, and guide. His warmth is enough to motivate anyone to learn new skills. He always encourages us 
          to get out of one's comfort zone and try out new things.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Arijit Mandal - Probationary Officer,SBI</h3>
      <p>
      I cannot forget the time I spent with Mr. Arjun Dutta sir and IQApex Labs.
      Everytime I met  Sir, I got inspiration from his entrepreneurial character and morale. 
      Working in R&D department at IQApex Labs was one of the most important and integral parts of my Engineering degree.
      The team of IQApex Labs is very helpful and very rich in their knowledge. The journey was beautiful,
      If possible I want to work with Sir once again.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Yadhu Nair -  Msc,Amrita School of Engineering, coimbatore  </h3>
      <p>
      Thank you so much for acknowledging my work.I personally had a good time working with you and learned a lot while working  and its been a privilege to work with you company.

      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Pratik Sarode - Graduate Trainee in Quality Management and Methods Dept. in BOSCH Ltd., Nashik Plant  </h3>
      <p>
      I would like to thank Team IQApex for support and cooperation.
      The mentors were so friendly and frank that I never had a burden on me also
      when I was talking with the CEO. Sir gave me sufficient time to complete my work 
      and also helped me from time to time. Lots of research specific things
      were the main point of learning.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img style={{height:400,width:400}}
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Amartya Guha - Risk Analyst at FIS Global  </h3>
      <p>
      Working in R&D department at IQApex Labs was one of the most important and integral parts 
      of my Engineering degree.I gained much knowledge at IQApex and have really enjoyed it.

      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
      {/*   <div className='connect'>
        <h1 data-aos="fade-left">
          Let's connect
        </h1>
        <div className='form-container'>
        <form>
        

          <div className='left-side'>
          <div className='left-texts'>
          <h2>
              Have a Project in Mind? Have any queries?Any thoughts or comment about us? 
            </h2>
            <h4>
              We'd love to hear from you.
            </h4>
          </div>
          <div className='input-fields'>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <textarea  rows={4}  placeholder='Tell us briefly about your project/Ask any questions or simply leave a comment.'/>
            <button className='Send-button'>Send a message</button>
          </div>
          </div>
         
          <div className='right-side'>
              <div className='right-text'>
                    <h2>
                      Kickstart your Project with us 
                    </h2>
                    <h2>
                      GET IN TOUCH
                    </h2>

              </div>
  
    <div className="contact-details">
      <div className="address-details">
        <div>
        <LocationOnIcon sx={{color: "white" }} fontSize="large"/>
        </div>
        <div>
          <h3>
            Address  
          </h3>
          <p>Beta-box,Haldiram,Kolkata</p>
        </div>
      </div>
      <div>
        <div className="phone-details">
          <div>
        <PhoneIcon sx={{color: "white"}} fontSize="large"/>
          </div>
          <div>
          <h3>
            Phone
          </h3>
          <p>9898989898</p>
          </div>
        </div>
      </div>
      <div>
        <div className="email-details">
          <div>
              <MailIcon  sx={{color: "white"}} fontSize="large"/>
          </div>
          <div>
          <h3>
            Email
          </h3>
          <p>iqapex@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className='right-bottom'>
        <h3>
          You can also connect with us on our Socials
        </h3>
        <div className='social-media-right'>
            <img src={Facebook} alt=''/>
            <img src={LinkedIn} alt=''/>
            <img src={YouTube} alt=''/>
            <img src={Instagram} alt=''/>
         
            </div>
            <h3>
            Let's work Together!
          </h3>
         </div>

          </div> 
          
          </form>
        </div>
         
        </div> */}
        </div>
    </div>
  )
}

export default Companies