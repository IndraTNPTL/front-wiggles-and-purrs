// import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import service from "../../service/api";

import { AuthContext } from "../../service/authContext";

// import headerPic from "../assets/adoptPet.jpeg";

function AdoptionForm() {
	const navigate = useNavigate();
	const { id } = useParams();
	// console.log(id);

	const { authenticateUser, user } = useContext(AuthContext);
	// console.log(user);

	const [formData, setFormData] = useState({
		petName: "",
		petLocation: "",
		petId: "",
		userName: "",
		userEmail: "",
		userId: "",
	});

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchInfos();
	}, []);

	async function fetchInfos() {
		const response = await service.get(`/api/pets/${id}`);
		const {
			name,
			specie,
			breed,
			rangeAge,
			gender,
			size,
			color,
			description,
			photo,
			foundDate,
			location,
			available,
		} = response.data;

		setFormData({
			petName: name,
			petLocation: location,
			petId: id,
			userName: user.name,
			userEmail: user.email,
			userId: user._id,
		});
	}

	// console.log(formData);

	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await service.post("/api/adopt-a-pet", formData);

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

				<label>Your name / pre-filled</label>
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

				<label>Your email / pre-filled</label>
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
