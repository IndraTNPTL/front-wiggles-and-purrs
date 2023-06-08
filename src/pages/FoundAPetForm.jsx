import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../service/authContext";
import service from "../../service/api";

import headerPic from "../assets/pug.jpeg";

function FoundAPetForm() {
	const navigate = useNavigate();

	const { authenticateUser } = useContext(AuthContext);

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [formData, setFormData] = useState({
		photo: "",
		name: "",
		specie: "",
		breed: "",
		size: "",
		color: "",
	});
	console.log(formData);

	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await service.post(
				"https://wiggles-and-purrs.onrender.com/api/found-a-pet",
				formData
			);

			if (response.data) {
				await authenticateUser();
				navigate("/thank-you");
			} else {
				setError(response.status);
			}
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}
	};

	return (
		<div className="content-page-container">
			<h1>I found a pet! 🐾 </h1>

			<img className="writeImg" src={headerPic} alt="picture" />

			<form className="writeForm" onSubmit={handleSubmit}>
				<label>Pet image URL</label>
				<input
					type="url"
					className="dropDownInput"
					placeholder="Enter image url..."
					value={formData.photo}
					onChange={(event) =>
						setFormData({ ...formData, photo: event.target.value })
					}
				/>

				<label>Pet Name</label>
				<input
					type="text"
					className="dropDownInput"
					placeholder="Enter pet name..."
					value={formData.name}
					onChange={(event) =>
						setFormData({ ...formData, name: event.target.value })
					}
				/>

				<label>Specie</label>
				<select
					className="dropDownInput"
					name="pets"
					id="pet-select"
					value={formData.specie}
					onChange={(event) =>
						setFormData({ ...formData, specie: event.target.value })
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hedgehog">Hedgehog</option>
				</select>

				<label>Breed</label>
				<select
					className="dropDownInput"
					name="pets"
					id="pet-select"
					value={formData.breed}
					onChange={(event) =>
						setFormData({ ...formData, breed: event.target.value })
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="Husky">Husky</option>
					<option value="Akita">Akita</option>
					<option value="Shepherd">Shepherd</option>
					<option value="Golden Retriever">Golden Retriever</option>
					<option value="Schnauzer">Schnauzer</option>
					<option value="Pomeranian">Pomeranian</option>
					<option value="Beagle">Beagle</option>
					<option value="Dachshund">Dachshund</option>
					<option value="Pug">Pug</option>
					<option value="Poodle">Poodle</option>
					<option value="Bichon Frise">Bichon Frise</option>
					<option value="Russian Blue">Russian Blue</option>
					<option value="Cocker Spaniel">Cocker Spaniel</option>
					<option value="Sphynx">Sphynx</option>
					<option value="Sheepdog">Sheepdog</option>
					<option value="Chartreux">Chartreux</option>
					<option value="Birman">Birman</option>
					<option value="Bulldog">Bulldog</option>
					<option value="Exotic Shorthair">Exotic Shorthair</option>
					<option value="Munchkin">Munchkin</option>
					<option value="British Shorthair">British Shorthair</option>
					<option value="Bengal">Bengal</option>
					<option value="Siamese">Siamese</option>
					<option value="Japanese Bobtail">Japanese Bobtail</option>
					<option value="Persian">Persian</option>
					<option value="Ragamuffin">Ragamuffin</option>
					<option value="Snowshoe">Snowshoe</option>
					<option value="Cape Hedgehog">Cape Hedgehog</option>
					<option value="Long-Eared Hedgehog">
						Long-Eared Hedgehog
					</option>
					<option value="European Hedgehog">European Hedgehog</option>
					<option value="North African Hedgehog">
						North African Hedgehog
					</option>
					<option value="African Pygmy Hedgehog">
						African Pygmy Hedgehog
					</option>
					<option value="Desert Hedgehog">Desert Hedgehog</option>
					<option value="Somali Hedgehog">Somali Hedgehog</option>
					<option value="Others">Others</option>
				</select>

				<label>Size</label>
				<select
					className="dropDownInput"
					name="pets"
					id="pet-select"
					value={formData.size}
					onChange={(event) =>
						setFormData({
							...formData,
							size: event.target.value,
						})
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
				</select>

				<label>Color</label>
				<input
					type="text"
					className="dropDownInput"
					placeholder="Enter pet color..."
					value={formData.color}
					onChange={(event) =>
						setFormData({ ...formData, color: event.target.value })
					}
				/>
				{error && <p className="error-message">{error}</p>}
				<div className="go-to-auth-ctas">
					<div className="go-to-signup">
						<button className="btn-send-form" type="submit">
							Send my application
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default FoundAPetForm;
