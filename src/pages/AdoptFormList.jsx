import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myApi from "../../service/api";
import { AuthContext } from "../../service/authContext";

function AdoptFormList() {
	const { user, isLoggedIn } = useContext(AuthContext);

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [adoptionForms, setAdoptionForms] = useState([]);

	useEffect(() => {
		myApi
			.get("/api/adopt-a-pet/pending")
			.then((response) => {
				const data = response.data;
				setAdoptionForms(data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!Array.isArray(adoptionForms)) {
		return <p>Loading...</p>;
	}

	return (
		<div className="content-page-container">
			<h1>Pets asked for adoption 🐾</h1>
			{isLoggedIn && user.role === "admin" && (
				<>
					{/* <div>
						<div className="cards-wrapper">
							{adoptionForms.map((adoptionForm) => (
								<div key={adoptionForm._id} className="card">
									<Link
										to={`/adopt-a-pet/pending/${adoptionForm._id}`}
									>
										<div className="card-content">
											<h4 className="card-name">
												{adoptionForm.name}
											</h4>
											<h5 className="card-breed">
												{adoptionForm.breed}
											</h5>
											<h5 className="card-location">
												📍 {adoptionForm.location}
											</h5>
											<p className="card-infos">
												{adoptionForm.gender} •{" "}
												{adoptionForm.rangeAge} • Size:{" "}
												{adoptionForm.size}
											</p>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div> */}
				</>
			)}
		</div>
	);
}

export default AdoptFormList;
