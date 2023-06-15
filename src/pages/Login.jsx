import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../service/authContext";

import backArrow from "../assets/icons8-back-arrow.png";
import puggy from "../assets/pug.png";

// import myApi from "../../service/api";

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

	const [showPassword, setShowPassword] = useState(false);
	const [passwordTimeout, setPasswordTimeout] = useState(null);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
		if (!showPassword) {
			setPasswordTimeout(
				setTimeout(() => {
					setShowPassword(false);
				}, 700)
			);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"https://wiggles-and-purrs.onrender.com/auth/login",
				formData
			);
			// console.log(response);

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
					<button className="btn-signup">I want an account ➜</button>
				</Link>
			</div>

			<h1>Hello back 🐾</h1>

			<form className="landingForm" onSubmit={handleSubmit} method="post">
				<label>Your Email</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter your email..."
					value={formData.email}
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
					autoComplete="email" // Add the autocomplete attribute
				/>

				<label>Your Password</label>
				<input
					type={showPassword ? "text" : "password"}
					className="landingInput bottom"
					placeholder="Enter your password..."
					value={formData.password}
					onChange={(event) => {
						setFormData({
							...formData,
							password: event.target.value,
						});
					}}
					autoComplete="current-password" // Add the autocomplete attribute
				/>
				<Link
					id="show-password"
					to="#"
					onClick={togglePasswordVisibility}
				>
					{showPassword ? "Hide password" : "Show password"}
				</Link>

				{/* <input
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
				/> */}

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
