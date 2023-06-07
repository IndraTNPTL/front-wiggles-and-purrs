import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../service/AuthContext";
import backArrow from "../assets/icons8-back-arrow.png";
import puggy from "../assets/pug.png";

import myApi from "../../service/api";

function Login() {
	const navigate = useNavigate();
	const { authenticateUser } = useContext(AuthContext);

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// const api = {
		// 	method: "post",
		// 	baseURL: import.meta.env.VITE_BACKEND_URL,
		// 	url: "auth/login",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: formData,
		// };

		try {
			const response = await axios.post(
				"http://localhost:3000/auth/login",
				formData
			);
			console.log(response);

			if (response.data) {
				const jwt = response.data.authToken;
				localStorage.setItem("token", jwt);
				await authenticateUser();
				navigate("/hello");
			} else {
				setError(response.status);
			}
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}

		// ?OLD CODE IF NEEDED
		// axios(api)
		// 	.then((response) => {
		// 		if (response.data) {
		// 			const jwt = response.data.token;
		// 			localStorage.setItem("token", jwt);
		// 			navigate("/hello");
		// 		} else {
		// 			setError(response.status);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		setError(error.response.data.message);
		// 	});
	};

	return (
		<div className="content-page-container">
			<div className="nav-btns">
				<Link to={"/"}>
					<img
						className="back-arrow"
						src={backArrow}
						alt="back-arrow"
					/>
				</Link>
				<Link to={"/signup"}>
					<button className="btn-signup">Sign Up instead ➜</button>
				</Link>
			</div>

			<h1>Hello back 🐾</h1>

			<form className="landingForm" onSubmit={handleSubmit}>
				<label>Your Email</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter your email..."
					value={formData.email}
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
				/>

				<label>Your Password</label>
				<input
					type="password"
					className="landingInput"
					placeholder="Enter your password..."
					value={formData.password}
					onChange={(event) =>
						setFormData({
							...formData,
							password: event.target.value,
						})
					}
				/>
				{error && <p className="error-message">{error}</p>}
				<button className="btn-login" type="submit">
					Login
				</button>
			</form>
			<div>
				<img className="landing_pet" src={puggy} alt="puggy" />
			</div>
		</div>
	);
}

export default Login;
