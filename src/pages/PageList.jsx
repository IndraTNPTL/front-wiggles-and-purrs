// import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import myApi from "../../service/api";

function PageList({ handleAddToFavorite }) {
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [pets, setPets] = useState([]);
	const { specie } = useParams();

	useEffect(() => {
		myApi
			.get(`/api/pets/specie/${specie}`)
			.then((response) => {
				setPets(response.data);
			})
			.catch((e) => console.log(e));
	}, [specie]);

	if (!pets) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<div className="content-page-container">
				<h1>
					<span className="highlighted-blue">{specie}s</span> seeking
					a forever home 🐾
				</h1>

				<div>
					<div className="cards-wrapper">
						{pets.map((pet) => (
							<div key={pet._id} className="card">
								<Link to={`/pets/specie/${pet._id}`}>
									<div className="card-image">
										<img src={pet.photo} />
									</div>
									<div className="card-content">
										<h4 className="card-name">
											{pet.name}
										</h4>
										<h5 className="card-breed">
											{pet.breed}
										</h5>
										<h5 className="card-location">
											📍 {pet.location}
										</h5>
										<p className="card-infos">
											{pet.gender} • {pet.rangeAge} •
											Size: {pet.size}
										</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default PageList;
