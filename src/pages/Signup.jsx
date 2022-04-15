import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";

function Signup() {
     
    const navigate=useNavigate();
    const [data, setData] = useState({
		username:""	,	
		email: "",
		country: "",
		number: "",
		password: "",
		cpassword:"",
	    
	});

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			
			const url = "/api/users/signup";
        
			
			const { data: res } = await axios.post(url, data);
			
			navigate("/login");
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div>
        <form className="signup-form" >			{/* onSubmit={handleSubmit} */}  {/* {()=>setIsOpen(true)} */}
						<h1>Create account</h1>
						<input
							type = "text"
							placeholder = "UserName"
							name = "username"
							onChange = {handleChange}
							value = {data.username}
							required
							className = ""
						/>

                        <input
							type = "text"
							placeholder = "Email"
							name = "email"
							onChange = {handleChange}
							value = {data.email}
							required
							className = ""
						/>
					
					
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className=""
						/>
							<input
							type="password"
							placeholder="Confirm Password"
							name="cpassword"
							onChange={handleChange}
							value={data.cpassword}
							required
							className=""
						/>
                       </form>
    </div>
  )
}

export default Signup