import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Donation from "../components/Donation";

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
			<h2>Welcome to our pet adoption web app!</h2>
			<p className="intro">
				Match your new best friend and make a difference in their life.
				Adopt a pet and experience the joy of unconditional love.
			</p>

			<Donation></Donation>
			<h2 className="sub-title">
				Meet the VIPs
				<br />
				<span className="small">(very important pets😎)!</span>
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
	);
}

export default Homepage;
