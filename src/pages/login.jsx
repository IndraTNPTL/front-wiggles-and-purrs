import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import backArrow from "../assets/icons8-back-arrow.png";
import puggy from "../assets/pug.png";

function Login({ handleSubmit }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

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
					<button className="btn-signup">Sign Up</button>
				</Link>
			</div>

			<h1>Hello back 🐾</h1>

			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Your Email</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your email..."
				/>

				<label>Your Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password..."
				/>

				<button className="btn-login" type="submit">
					Login
				</button>
			</form>
			<div>
				<img className="puggy" src={puggy} alt="puggy" />
			</div>
		</div>
	);
}

export default Login;
