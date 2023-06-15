import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../service/authContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import myApi from "../../service/api";
import placeholderIMG from "../assets/imageplaceholder.png";
import backArrow from "../assets/icons8-back-arrow.png";

function PetFoundList() {
	const { user, isLoggedIn } = useContext(AuthContext);

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [foundPets, setFoundPets] = useState([]);
	const { petId } = useParams();

	useEffect(() => {
		myApi
			.get("/api/pets/nonavailable/")
			.then((response) => {
				setFoundPets(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!foundPets) {
		return <p>No Pets application pending! Let's find them a home now</p>;
	}

	return (
		<div className="content-page-container ">
			{isLoggedIn && user.role === "admin" && (
				<>
					<div className="nav-btns">
						<Link to={"/admin-dashboard"}>
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
					<h1>Found pets</h1>
					<div>
						<div className="cards-wrapper">
							{foundPets.map((foundPet) => (
								<div key={foundPet._id} className="card">
									<Link
										to={`/admin-dashboard/pet-found-details/${foundPet._id}`}
									>
										{foundPet.photo ? (
											<div className="card-image">
												<img
													src={foundPet.photo}
													alt={foundPet.name}
												/>
											</div>
										) : (
											<div className="card-image">
												<img
													src={placeholderIMG}
													alt="placeholder"
												/>
											</div>
										)}
										<div className="card-content">
											<h4 className="card-name">
												{foundPet.name}
											</h4>
											<h5 className="card-specie">
												{foundPet.breed} •{" "}
												{foundPet.specie}
											</h5>
											<p className="card-infos">
												{foundPet.size}
											</p>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default PetFoundList;
