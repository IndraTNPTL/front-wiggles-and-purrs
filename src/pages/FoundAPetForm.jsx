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
		location: "",
		specie: "",
		breed: "",
		gender: "",
		size: "",
		rangeAge: "",
		color: "",
		description: "",
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
			{/* <img className="writeImg" src={headerPic} alt="picture" /> */}

			<h1>I found a pet! 🐾 </h1>

			<h2>
				You have just found a lonely pet and would like to make it
				available for adoption?
			</h2>
			<h2>
				You can ask for it to be listed in our database and thus allow
				it to find a loving family as soon as possible!
			</h2>
			<h2>All you have to do is to fill up and submit the form below!</h2>

			<form className="writeForm" onSubmit={handleSubmit}>
				<label>Pet image URL</label>
				<input
					type="url"
					className="landingInput"
					placeholder="Enter image url..."
					value={formData.photo}
					onChange={(event) =>
						setFormData({ ...formData, photo: event.target.value })
					}
				/>

				<label>Pet Name</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter pet name..."
					value={formData.name}
					onChange={(event) =>
						setFormData({ ...formData, name: event.target.value })
					}
				/>

				<label>Pet Location (ex: Paris)</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter pet location..."
					value={formData.location}
					onChange={(event) =>
						setFormData({
							...formData,
							location: event.target.value,
						})
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
					<option value="Berger Belge">Berger Belge</option>
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
					{/* <option value="Others">Others</option> */}
				</select>

				<label>Gender</label>
				<select
					className="dropDownInput"
					name="pets"
					id="pet-select"
					value={formData.gender}
					onChange={(event) =>
						setFormData({ ...formData, gender: event.target.value })
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="Female">Female</option>
					<option value="Male">Male</option>
					<option value="Unknown">Unknown</option>
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

				<label>Range Age (approximately)</label>
				<select
					className="dropDownInput"
					name="pets"
					id="pet-select"
					value={formData.rangeAge}
					onChange={(event) =>
						setFormData({
							...formData,
							rangeAge: event.target.value,
						})
					}
				>
					<option value="">--Please choose an option--</option>
					<option value="Under 6 months">Under 6 months</option>
					<option value="6 - 12 months">6 - 12 months</option>
					<option value="1 - 2 years">1 - 2 years</option>
					<option value="2 - 5 years">2 - 5 years</option>
					<option value="5 - 7 years">5 - 7 years</option>
					<option value="8 + years">8 + years</option>
				</select>

				<label>Color</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter pet color..."
					value={formData.color}
					onChange={(event) =>
						setFormData({ ...formData, color: event.target.value })
					}
				/>

				<label>Short description</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Enter a short description of the pet"
					value={formData.description}
					onChange={(event) =>
						setFormData({
							...formData,
							description: event.target.value,
						})
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
