import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { AuthContext } from "../../service/AuthContext";

// import headerPic from "../assets/adoptPet.jpeg";

function AdoptionForm({ user, pet }) {
	const navigate = useNavigate();

	// !MIGHT WON'T NEEDED
	// const { authenticateUser } = useContext(AuthContext);

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [formData, setFormData] = useState({
		petName: data.pet.name,
		petLocation: pet.location,
		petId: pet._id,
		userName: user.name,
		userEmail: user.email,
		userId: user._id,
	});
	console.log(formData);

	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:3000/api/adoption",
				formData
			);

			if (response.data) {
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
			<h1>🐾 Adoption application</h1>

			<h2>
				The form below is{" "}
				<span className="highlighted-blue">already pre-filled!</span> We
				only need you to accept it or not, as a{" "}
				<span className="highlighted-blue">final agreement</span> in the
				case your application is accepted!
			</h2>
			<h2>
				Keep in mind that adopt a pet is a lifetime story!
				<br />
				<span className="highlighted-blue">
					We need you to be sure that you are ready for this new
					adventure 💖
				</span>
			</h2>

			<form className="writeForm" onSubmit={handleSubmit}>
				{/* <input type="file" id="fileInput" style={{ display: "none" }} /> */}

				<label>Pet Name / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petName}
					onChange={(event) =>
						setFormData({
							...formData,
							petName: event.target.value,
						})
					}
				/>

				<label>Pet Location / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petLocation}
					onChange={(event) =>
						setFormData({
							...formData,
							petLocation: event.target.value,
						})
					}
				/>

				<label>userName / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.userName}
					onChange={(event) =>
						setFormData({
							...formData,
							userName: event.target.value,
						})
					}
				/>

				<label>userEmail / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.userEmail}
					onChange={(event) =>
						setFormData({
							...formData,
							userEmail: event.target.value,
						})
					}
				/>

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

export default AdoptionForm;
