import React,{useState} from 'react';
import axios from "axios";

function Login() {

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleClick = async (e) => {
        e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);			
		
			/*  */

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
}

  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
   <form className="" onSubmit={handleClick}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className=""
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
						{error && <div className="">{error}</div>}

						<button  type="submit" className="">
							 LogIn
						</button>
            <a href="/forget">Forgotten Password?</a>

					</form>
  </div>
  )
}

export default Login