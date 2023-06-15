import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PostSignup() {
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		// !ADDED FOR CSS, SEE IF NEEDED BEFORE PUSH
		<div className="page-container">
			<div className="content-page-container">
				<h1>Thank you for joining us!</h1>
				{/* <div className="hero-banner">
				<img
					className="thankYouimg"
					src={thankYouimg}
					alt="cute pet thanking you"
				/>
			</div> */}

				<h2>Your account has been created 🥳</h2>
				<h2>Use your credentials now to login !</h2>
				<h2>We are waiting for you 🐶</h2>
				<div className="go-to-auth-ctas">
					<div className="go-to-signup">
						<Link to={"/login"}>
							<button className="btn-login">Login ➜</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostSignup;
