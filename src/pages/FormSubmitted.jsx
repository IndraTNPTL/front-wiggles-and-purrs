import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import thankYouimg from "../assets/thankyou.jpeg";

function FormSubmitted() {
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="content-page-container">
			<h1>
				<span className="highlighted-blue">Thank you!</span>
			</h1>
			<div className="hero-banner">
				<img
					className="thankYouimg"
					src={thankYouimg}
					alt="cute pet thanking you"
				/>
			</div>

			<h2>Your application as been well received!</h2>
			<h2>
				Our dream team will contact you soon about the next steps!{" "}
				<br />
				Keep an eye on your emails, spams included 👀
			</h2>
			<div className="go-to-auth-ctas">
				<div className="go-to-signup">
					<Link to={"/hello"}>
						<button className="btn-return-HP">
							Return to Homepage
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FormSubmitted;
