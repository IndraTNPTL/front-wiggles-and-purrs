import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import backArrow from "../Assets/icons8-back-arrow.png";
import catty from "../Assets/Cat.png";

function Signup() {
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
					<button className="btn-login">Login</button>
				</Link>
			</div>

			<h1>🐾 Welcome</h1>

			<form className="loginForm">
				<label>Your Username</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your username..."
				/>

				<label>Email</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your email..."
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password..."
				/>
				<button className="btn-signup" type="submit">
					Sign up
				</button>
			</form>
			<div>
				<img className="puggy" src={catty} alt="cat" />
			</div>
		</div>
	);
}

export default Signup;
