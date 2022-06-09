import React, { useEffect,useState } from 'react';

import "./product.css";
import Aos from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert';
import axios from 'axios';
import Img1 from "../../images/2.png";
import Img2 from "../../images/fish.png";
import Img3 from "../../images/gel.jpeg";
import Img4 from "../../images/greenlife.jpg";
import Img5 from "../../images/ktok.jpeg";
import Img6 from "../../images/host.jpeg"


function Product() {



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

   
      
    const[readMoreClicked1,setReadMOreClicked1]=useState(false);
    const[readMoreClicked2,setReadMOreClicked2]=useState(false);
    const[readMoreClicked3,setReadMOreClicked3]=useState(false);
    const[readMoreClicked4,setReadMOreClicked4]=useState(false);
    const[readMoreClicked5,setReadMOreClicked5]=useState(false);
    const[readMoreClicked6,setReadMOreClicked6]=useState(false);
    const[readMoreClicked7,setReadMOreClicked7]=useState(false);
    const[readMoreClicked8,setReadMOreClicked8]=useState(false);
    const[readMoreClicked9,setReadMOreClicked9]=useState(false);
    const[prodName,setProdName]=useState("");

const [error, setError] = useState("");

    const [orderbuttonClicked,setOrderbuttonClicked]=useState(false);

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    function handleReadMore1(){
        setReadMOreClicked1(!readMoreClicked1)
    }
    function handleReadMore2(){
        setReadMOreClicked2(!readMoreClicked2)
    }
    function handleReadMore3(){
        setReadMOreClicked3(!readMoreClicked3)
    }
    function handleReadMore4(){
        setReadMOreClicked4(!readMoreClicked4)
    }
    function handleReadMore5(){
        setReadMOreClicked5(!readMoreClicked5)
    }
    function handleReadMore6(){
        setReadMOreClicked6(!readMoreClicked6)
    }
    function handleReadMore7(){
        setReadMOreClicked7(!readMoreClicked7)
    }
    function handleReadMore8(){
        setReadMOreClicked8(!readMoreClicked8)
    }
    function handleReadMore9(){
        setReadMOreClicked9(!readMoreClicked9)
    }
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
                Products
            </h1>
            <div className='flex-div'>

                <div className='circle'>
                {readMoreClicked1? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore1}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img5} alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            
                                K TO K Consultants <h6>One Stop Law Firm for Businesses, Enterprises and Start-ups</h6> 
                            </h2>
                           <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"logistics IQPlant")} className="order-button">
                                Book now
                            </button>
                            <button  onClick={handleReadMore1} className='order-button'>
                                Read more
                            </button>
                            </div>

                        </div>

                    </div>}

                </div>
                <div className='circle'>
                {readMoreClicked2? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore2}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img4} alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            GreenLife IQponics
                            </h2>
                           <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"logistics IQPlant")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore2} className='order-button'>
                                Read more
                            </button>
                            </div>

                        </div>

                    </div>}

                </div>

                {/*    <Tilt className="Tilt" options={{ max : 35 }} style={{ height: "52%", width: "48%",margin:60,marginRight:"10%"}} > */}
               
                <div className='circle'>
                    {readMoreClicked3? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore3}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                   <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img6} alt="App devlopment" />
                        </div>
                        <div className='content'>
                            <h2>
                            iQHost 
                            </h2>
                           
                            <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"iQHost")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore3} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
            
            </div>
            <div className='flex-div'>
                <div className='circle2'>
                   {readMoreClicked4?
                   <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore4}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>: 
                   <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img1} alt="App devlopment" />
                        </div>
                        <div className='content'>
                            <h2>
                            CocoFruit Grinder Machine
                            </h2>
                           
                           <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"CocoFruit Grinder Machine")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore4} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                    
                </div>
                <div className='circle2'>
                {readMoreClicked5? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore5}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img2} alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Electric Fish De-scaler machine
                            </h2>
                           <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"Electric Fish De-scaler machine")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore5} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='circle2'>
                {readMoreClicked6? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore6}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Vending Crushers
                            </h2>
                            <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"Vending Crushers")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore6} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='flex-div'>
                <div className='circle2'>
                {readMoreClicked7? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore7}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src={Img3} alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            Ultrasound
                            </h2>
                            <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"Ultrasound")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore7} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='circle2'>
                {readMoreClicked8? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore8}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            IOT based Sanatization Tunnel
                            </h2>
                          <div className='card-buttons'>
                            <button onClick={(event)=> handleClick (event,"IOT based SanatiZation Tunnel")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore8} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='circle2'>
                {readMoreClicked9? <div className='read-more'>
                   <div className='x-close' onClick={handleReadMore9}>
                   x
                   </div>
                       <p>
                       product offers aquaponic/hydroponics/aeroponics training, support and program for individuals, schools and young entrepreneurs.Besides consultancy services this brand enhances aquaponics/hydroponics systems creating the most effective type of aquaponics/ hydroponics/aeroponics for indoors, homes and commercial purposes.
                       </p> 
                   </div>:
                    <div className='Circle-contents'>
                        <div className='circular-image'>
                            <img src="" alt="App devlopment" />

                        </div>
                        <div className='content'>
                            <h2>
                            IOT based Hand Sanatization System
                            </h2>
                            <div className='card-buttons'>
                            <button onClick={(event)=>handleClick(event,"IOT based Hand Sanatization System")} className="order-button">
                                Order now
                            </button>
                            <button onClick={handleReadMore9} className='order-button'>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            </div>
            }

        </div>
    )
}

export default Product