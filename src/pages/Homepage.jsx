import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Donation from "../components/Donation";
import PetGame from "../components/PetGame";

function Homepage() {
	const navigate = useNavigate();
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function handleClick(specie) {
		navigate(`/pets/${specie}`);
	}

	return (
		<div className="content-page-container">
			<h1>🐾 Hello! 🐾</h1>
			<h2 className="bold">Welcome to our pet adoption web app!</h2>
			<p className="intro">
				Match with your a new friend and make a difference in their
				life. Adopt a pet and experience the joy of unconditional love.
			</p>

			<PetGame />

			<div className="VIP-section">
				<h2 className="sub-title">
					Meet the VIPs
					<br />
					<span className="small">(Very Important Pets😎!)</span>
				</h2>
				<div className="buttons-container">
					<button
						className="homepage-btns dogs-btn"
						onClick={() => handleClick("dog")}
					>
						<span className="background">Dogs</span>
					</button>

					<button
						className="homepage-btns cats-btn"
						onClick={() => handleClick("cat")}
					>
						<span className="background">Cats</span>
					</button>

					<button
						className="homepage-btns hedg-btn"
						onClick={() => handleClick("hedgehog")}
					>
						<span className="background">Hedgehogs</span>
					</button>
				</div>
			</div>
			<Donation></Donation>
		</div>
	);
}

export default Homepage;
