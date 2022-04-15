import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router';
import "./product.css";
import Aos from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert';
import axios from 'axios'

function Product() {

const navigate=useNavigate();

    const [data, setData] = useState({
       firstname:"",
        middlename:"",
        lastname:"",
        address:"",
        country:"",
        city:"",
        pin:"",
        email:"",
        phone:"",
        quantity :"",
        message:"",
	    product:""
	});

   /*  const product=[{  first:"logistics IQPlant"},
    {second:"iQHost"},
   { third:"CocoFruit Grinder Machine"},
   { fourth:"Electric Fish De-scaler machine"},
    {fifth:"Vending Crushers"},
    {sixth:"Ultrasound"},
    {seventh:"IOT based SanatiZation Tunnel"},
    {eighth:"IOT based Hand Sanatization System"},] */
      
    
    const[prodName,setProdName]=useState("");

const [error, setError] = useState("");

    const [orderbuttonClicked,setOrderbuttonClicked]=useState(false);

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    function handleSubmit(e){
        e.preventDefault();
		try {
            if(data.firstname && data.lastname && data.address && data.country && data.city && data.email && data.quantity){

           
				const url = "http://localhost:5000/api/products/contact";
            
				console.log(data);
			
			 axios.post(url, data);
             swal("Completed", "Congrats! You placed order successfully","success");
            }
		else{
            swal("Error","Please Fill the required fields","error");
        }
			
		} catch (e) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
                swal("Oops!","Something went wrong","error");
				setError(error.response.data.message);
			}
		}
    }

    function handleClick(event,names) {  
        
        
        const newname=names;
       
        setProdName(newname);
        console.log(prodName);
        data.product=names;
        setOrderbuttonClicked(true);

    }
    function handleClose(e){
        e.preventDefault();
        setOrderbuttonClicked(false);
    }
/* api/products/contact */

    useEffect(() => {
        Aos.init({ duration: 900 });

    }, []);

    return (
        <div className='circleDivs-container'> 

          {orderbuttonClicked?
          
          <div>
          <form className="signup-form" >			{/* onSubmit={handleSubmit} */}  {/* {()=>setIsOpen(true)} */}
          <div onClick={handleClose} className="closebutton">
                            X
                        </div>
                        <h3>
                            User details
                        </h3>
                        <div className='manager-div'>

                        
                        <div className='names'>

                       
						<input
							type = "text"
							placeholder = "FirstName"
							name = "firstname"
							onChange = {handleChange}
							value = {data.firstname}
							
							className = ""
						/>
                        <input
							type = "text"
							placeholder = "MiddlerName"
							name = "middlename"
							onChange = {handleChange}
							value = {data.middlename}
							
							className = ""
						/>
                         <input
							type = "text"
							placeholder = "LastName"
							name = "lastname"
							onChange = {handleChange}
							value = {data.lastname}
							
							className = ""
						/>
                            
                        </div>

                       <div className='address-container'>

                          <input
							type = "text"
							placeholder = "Address"
							name = "address"
							onChange = {handleChange}
							value = {data.address}
							required
							className = ""
						/>
                       </div>

                      
                      <div className='user-home'>
                       
                        <input
							type = "text"
							placeholder = "Country"
							name = "country"
							onChange = {handleChange}
							value = {data.country}
							required
							className = ""
						/>
                        <input
							type = "text"
							placeholder = "City"
							name = "city"
							onChange = {handleChange}
							value = {data.city}
							required
							className = ""
						/>
                        <input
							type = "text"
							placeholder = "Pin"
							name = "pin"
							onChange = {handleChange}
							value = {data.pin}
							required
							className = ""
						/>
                         
                         </div>
                         <div className='user-contact'>                      
                        <input
							type = "email"
							placeholder = "Email"
							name = "email"
							onChange = {handleChange}
							value = {data.email}
							required
							className = ""
						/>

                        <input
							type = "number"
							placeholder = "Phone Number"
							name = "phone"
							onChange = {handleChange}
							value = {data.phone}
							
							className = ""
						/>
                        </div>
                        <div className='quantity'>
					    <input
							type = "number"
							placeholder = "Quantity"
							name = "quantity"
							onChange = {handleChange}
							value = {data.quantity}
							required
							className = ""
						/>
                        </div>
                        <div className='message-zone'>

                     
                        <textarea
                        rows={2}
							type = "textarea"
							placeholder = "message"
							name = "message"
							onChange = {handleChange}
							value = {data.message}
							
							className = ""
						/>
                           </div>
                         <div className='button-container-div'>
						<button onClick={handleSubmit} className="signup-button">
							Place order
						</button>
                        </div>
                        </div>
                       </form>
          </div>:
          <div>
          
          <h1 data-aos="fade-left">
                Hardware Products
            </h1>
            <div className='flex-div'>

                <div className='circle'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Logistics IQPlant
                            </h2>
                            <p>
                                Something abount Logistic IQPlant
                            </p>
                            <button onClick={(event)=>handleClick(event,"logistics IQPlant")} className="order-button">
                                Order now
                            </button>

                        </div>

                    </div>

                </div>

                {/*    <Tilt className="Tilt" options={{ max : 35 }} style={{ height: "52%", width: "48%",margin:60,marginRight:"10%"}} > */}

                <div className='circle'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />
                        </div>
                        <div className='content'>
                            <h2>
                            iQHost 
                            </h2>
                            <p>
                                Something abount iQHost
                            </p>
                            <button onClick={(event)=>handleClick(event,"iQHost")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex-div'>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />
                        </div>
                        <div className='content'>
                            <h2>
                            CocoFruit Grinder Machine
                            </h2>
                           
                            <button onClick={(event)=>handleClick(event,"CocoFruit Grinder Machine")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Electric Fish De-scaler machine
                            </h2>
                           
                            <button onClick={(event)=>handleClick(event,"Electric Fish De-scaler machine")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Vending Crushers
                            </h2>
                            
                            <button onClick={(event)=>handleClick(event,"Vending Crushers")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-div'>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Ultrasound
                            </h2>
                            
                            <button onClick={(event)=>handleClick(event,"Ultrasound")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            IOT based SanatiZation Tunnel
                            </h2>
                          
                            <button onClick={(event)=> handleClick (event,"IOT based SanatiZation Tunnel")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='circle2'>
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            IOT based Hand Sanatization System
                            </h2>
                            
                            <button onClick={(event)=>handleClick(event,"IOT based Hand Sanatization System")} className="order-button">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }

        </div>
    )
}
/*  const product=[{  first:"logistics IQPlant"},
    {second:"iQHost"},
   { third:"CocoFruit Grinder Machine"},
   { fourth:"Electric Fish De-scaler machine"},
    {fifth:"Vending Crushers"},
    {sixth:"Ultrasound"},
    {seventh:"IOT based SanatiZation Tunnel"},
    {eighth:"IOT based Hand Sanatization System"},] */
export default Product