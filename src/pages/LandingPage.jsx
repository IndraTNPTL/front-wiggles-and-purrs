import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import landingPimg from "../assets/Adopt_a_pet_3.png";

function LandingPage() {
	return (
		<div className="content-page-container">
			<div className="hero-banner">
				<img
					className="landingPimg"
					src={landingPimg}
					alt="cute pet welcoming you"
				/>
			</div>
			<h1>
				Welcome at <span>Wiggles & Purrs</span>
			</h1>
			<h2>
				Our mission is to connect adorable pets with caring individuals
				or families, creating lifelong companionship and happiness.
			</h2>
			<h2>Begin your journey today!</h2>
			<div className="go-to-auth-ctas">
				<div className="go-to-login">
					<Link to={"/login"}>
						<button className="btn-login">Login</button>
					</Link>
				</div>
				<div className="go-to-signup">
					<Link to={"/signup"}>
						<button className="btn-signup">Sign up</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
