import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import headerPic from "../assets/pug.jpeg";

function FoundAPetForm() {
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const api = {
			method: "post",
			baseURL: "http://localhost:3000",
			url: "api/found-a-pet",
			headers: {
				"Content-Type": "application/json",
			},
			data: formData,
		};

		axios(api)
			.then((response) => {
				const jwt = response.data.token;
				localStorage.setItem("token", jwt);
				navigate("/submitted");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="write">
			<span className="writeTitle">I found a pet!</span>
			<img className="writeImg" src={headerPic} alt="picture" />

			<form className="writeForm">
				<label htmlFor="fileInput">
					<i className="writeIcon fa-regular fa-square-plus">
						{" "}
						Upload photos
					</i>
				</label>
				<input type="file" id="fileInput" style={{ display: "none" }} />

				<label>Pet Name</label>
				<input
					type="name"
					className="writeInput"
					placeholder="Enter name..."
				/>

				<label>Specie</label>
				<input
					type="specie"
					className="writeInput"
					placeholder="Dog, cat or hedgehog..."
				/>

				<label>Breed</label>
				<input
					type="breed"
					className="writeInput"
					placeholder="Enter breed..."
				/>

				<label>Size</label>
				<input
					type="size"
					className="writeInput"
					placeholder="Small, medium or Large..."
				/>

				<label>Color</label>
				<input
					type="colorInfo"
					className="writeInput"
					placeholder="Enter color..."
				/>

				<button className="writeSubmit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default FoundAPetForm;
