import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import service from "../../service/api";
import { Link } from "react-router-dom";

import { AuthContext } from "../../service/authContext";
import backArrow from "../assets/icons8-back-arrow.png";

function PetFoundDetails() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { authenticateUser, user } = useContext(AuthContext);
	const [foundPets, setFoundPets] = useState([]);

	const [formData, setFormData] = useState({
		petPhoto: "",
		petName: "",
		petSpecie: "",
		petBreed: "",
		petLocation: "",
		petGender: "",
		petRangeAge: "",
		petSize: "",
		petColor: "",
		petDescription: "",
		petId: "",
		reporterName: "",
		reporterEmail: "",
		userId: "",
		petAvailability: false,
	});

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchInfos();
	}, []);

	async function fetchInfos() {
		try {
			const response = await service.get(`api/pets/${id}`);
			// console.log("Fetch Infos Response:", response.data);
			const {
				_id,
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
				...formData,
				petPhoto: photo || "",
				petName: name || "",
				petSpecie: specie || "",
				petBreed: breed || "",
				petLocation: location || "",
				petGender: gender || "",
				petRangeAge: rangeAge || "",
				petSize: size || "",
				petColor: color || "",
				petDescription: description || "",
				petId: _id || "",
				reporterName: user.name || "",
				reporterEmail: user.email || "",
				userId: user._id || "",
				petAvailability: available || "",
			});
		} catch (error) {
			console.log("Fetch Infos Error:", error);
		}
	}

	const [error, setError] = useState(null);

	const handleUpdateAvailability = async (event) => {
		event.preventDefault();
		try {
			const updatedFormData = {
				...formData,
				petAvailability: true,
			};

			const response = await service.put(
				`/api/pets/${formData.petId}`,
				updatedFormData
			);

			if (response.data) {
				await authenticateUser();
				setFormData;
				// Filter out the updated pet from the foundPets list
				setFoundPets((prevFoundPets) =>
					prevFoundPets.filter((pet) => pet._id !== id)
				);
				navigate("/admin-dashboard/pet-found-list");
			} else {
				setError("Failed to update pet availability", response.status);
			}
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<div className="content-page-container">
			<div className="nav-btns">
				<Link to={"/admin-dashboard/pet-found-list"}>
					<img
						className="back-arrow"
						src={backArrow}
						alt="back-arrow"
					/>
				</Link>
				<Link to={"/hello"} className="buttons-container">
					<button className="btn-back-to-website">
						Go back to website
					</button>
				</Link>
			</div>
			<h1>Found Pet Detail</h1>

			<form className="writeForm" onSubmit={handleUpdateAvailability}>
				<label>Pet Photo / pre-filled</label>
				<input
					type="url"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petPhoto}
					onChange={(event) =>
						setFormData({
							...formData,
							petPhoto: event.target.value,
						})
					}
				/>

				<label>Pet Name / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petName}
					onChange={handleChange}
				/>

				<label>Pet Specie / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petSpecie}
					onChange={(event) =>
						setFormData({
							...formData,
							petSpecie: event.target.value,
						})
					}
				/>

				<label>Pet Breed / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petBreed}
					onChange={(event) =>
						setFormData({
							...formData,
							petBreed: event.target.value,
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

				<label>Pet Gender / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petGender}
					onChange={(event) =>
						setFormData({
							...formData,
							petGender: event.target.value,
						})
					}
				/>

				<label>Pet Age / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petRangeAge}
					onChange={(event) =>
						setFormData({
							...formData,
							petRangeAge: event.target.value,
						})
					}
				/>

				<label>Pet Size / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petSize}
					onChange={(event) =>
						setFormData({
							...formData,
							petSize: event.target.value,
						})
					}
				/>

				<label>Pet Color / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petColor}
					onChange={(event) =>
						setFormData({
							...formData,
							petColor: event.target.value,
						})
					}
				/>

				<label>Pet Description / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petDescription}
					onChange={(event) =>
						setFormData({
							...formData,
							petDescription: event.target.value,
						})
					}
				/>

				<label>Reporter name / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.reporterName}
					onChange={(event) =>
						setFormData({
							...formData,
							reporterName: event.target.value,
						})
					}
				/>

				<label>Reporter email / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.reporterEmail}
					onChange={(event) =>
						setFormData({
							...formData,
							reporterEmail: event.target.value,
						})
					}
				/>

				{/* <label>Pet Availability / pre-filled</label>
				<input
					type="text"
					className="landingInput"
					placeholder="Pre-filled"
					value={formData.petAvailability}
					onChange={(event) =>
						setFormData({
							...formData,
							petAvailability: event.target.value,
						})
					}
				/> */}

				<div className="submit-found-pet">
					<button className="btn-send-form">
						Make Pet Available
					</button>
				</div>
			</form>
		</div>
	);
}

export default PetFoundDetails;
