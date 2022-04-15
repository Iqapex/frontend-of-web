import React,{useState} from "react"
import axios from "axios";

import { Link, useNavigate} from "react-router-dom";


export default function Forget(){

   
    const navigate = useNavigate();


   
    let [email, setEmail] = useState("");
   ;
    let [verifyOtp, setVerifyOtp] = useState("");
    let [timeStamp, setTimeStamp] = useState("");


    async function handleOtp() {
        /* e.preventDefault(); */
            
            if(email){
              axios.post("http://localhost:5000/api/handleotp", { email })
             
         .then((response) => {
            console.log(response.data);
            setVerifyOtp(response.data.otp);
            setTimeStamp(response.data.timeStamp);
            localStorage.setItem("otp",response.data.otp);
            localStorage.setItem("email", email);         

        });
        navigate("/confirm");
    }
  
    }
    

    const handleChange = e => {
       setEmail(e.target.value);
    }

    return(

        <div className="">
            
        <div className="">
            <div className="">
        <form className="">

        
          <h1>
              Send OTP
          </h1>
            <input style ={{textAlign:"center"}} type="text" name="email" value={email} placeholder="Enter your Email" onChange={ handleChange } required ></input>
         
         ]
         <button className="" onClick={handleOtp} > Send OTP</button>
       ]
         
            </form>

        </div>
        </div>
        </div>
    )
}