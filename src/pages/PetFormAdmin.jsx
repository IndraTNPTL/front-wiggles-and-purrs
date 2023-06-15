function PetFormAdmin() {
	return (
		<div className="content-page-container">
			<h1>
				<span className="green">{pets.name} 🐾</span>
			</h1>

			<div className="detail-image">
				<img src={pets.photo} />
			</div>
			<div className="detail-content">
				<h5 className="detail-breed">{pets.breed}</h5>
				<h5 className="detail-location">
					Currently in {pets.location}
				</h5>
				<p className="detail-infos">
					{pets.gender} • {pets.color} • {pets.rangeAge} • {pets.size}
				</p>
				<p className="detail-description">{pets.description}</p>
			</div>
			<Link>
				{" "}
				<button className="btn-admin" type="submit">
					Accept
				</button>
			</Link>
			<Link>
				<button className="btn-admin" type="submit">
					Modify
				</button>
			</Link>
			<Link>
				<button className="btn-admin" type="submit">
					Reject
				</button>
			</Link>
		</div>
	);
}

export default PetFormAdmin;
