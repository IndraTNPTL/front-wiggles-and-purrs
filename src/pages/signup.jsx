import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import backArrow from "../assets/icons8-back-arrow.png";
import catty from "../assets/Cat.png";

import myApi from "../../service/api";

function Signup() {
	const navigate = useNavigate();

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const api = {
			method: "post",
			baseURL: myApi.defaults.baseURL,
			url: "auth/signup",
			headers: {
				"Content-Type": "application/json",
			},
			data: formData,
		};

		try {
			const response = await myApi(api);

			if (response.data) {
				const jwt = response.data.token;
				localStorage.setItem("token", jwt);
				navigate("/hello");
			} else {
				setError(response.status);
			}
		} catch (error) {
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
				<Link to={"/login"}>
					<button className="btn-login">Login instead ➜</button>
				</Link>
			</div>

			<h1>🐾 Welcome</h1>

			<form className="landingForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter your username..."
					value={formData.name}
					onChange={(event) =>
						setFormData({ ...formData, name: event.target.value })
					}
				/>

				<label>Email</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter your email..."
					value={formData.email}
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
				/>

				<label>Password</label>
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
				<button className="btn-signup" type="submit">
					Sign up
				</button>
			</form>
			<div>
				<img className="landing_pet" src={catty} alt="cat" />
			</div>
		</div>
	);
}

export default Signup;
