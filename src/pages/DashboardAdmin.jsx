// TODO
function DashboardAdmin() {
	return (
		<div className="content-page-container ">
			<h1>Pet Info 🐾</h1>
			<div className="pet-detail">
				<p>
					<b>Pet Name :</b> Chi Chi{" "}
				</p>
				<p>
					<b>Species :</b> Dog
				</p>
				<p>
					<b>Breed :</b> Chihuahua{" "}
				</p>
				<p>
					<b>Size :</b> Small
				</p>
				<p>
					<b>Color :</b> Black
				</p>
				<div className="buttons">
					<button className="btn-admin" type="submit">
						Accept
					</button>
					<button className="btn-admin" type="submit">
						Modify
					</button>
					<button className="btn-admin" type="submit">
						Reject
					</button>
				</div>
			</div>
		</div>
	);
}

export default DashboardAdmin;
