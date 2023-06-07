import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
			<h1>Hello!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
				debitis molestiae, incidunt error dolor eaque similique eum
				exercitationem nulla dicta quidem, veritatis sit excepturi
				doloremque nostrum laboriosam voluptas nobis aperiam.
			</p>

			<div className="buttons-container">
				<button
					className="homepage-btns dogs-btn"
					onClick={() => handleClick("dog")}
				></button>

				<button
					className="homepage-btns cats-btn"
					onClick={() => handleClick("cat")}
				></button>

				<button
					className="homepage-btns hedg-btn"
					onClick={() => handleClick("hedgehog")}
				></button>
			</div>
		</div>
	);
}

export default Homepage;
