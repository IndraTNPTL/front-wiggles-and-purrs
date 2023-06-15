import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../service/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DashboardAdmin() {
	const { user, isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const handleClickAdoption = () => {
	// 	if (isLoggedIn && user.role === "admin") {
	// 		navigate("/admin-dashboard/adoption-forms");
	// 	}
	// };

	const handleClickPetFounded = () => {
		if (isLoggedIn && user.role === "admin") {
			navigate("/admin-dashboard/pet-found-list");
		}
	};

	// const handleClickNonAvailablePets = () => {
	// 	if (isLoggedIn && user.role === "admin") {
	// 		navigate("/nonavailable");
	// 	}
	// };

	return (
		<div>
			{isLoggedIn && user.role === "admin" && (
				<div className="content-page-container">
					<div className="nav-btns"></div>
					<h1>Admin Dashboard</h1>
					<div className="dash-section">
						{/* <h2>Pending applications</h2> */}
						<div className="buttons-container">
							{/* <button
								className="dashboard-btns"
								onClick={() => handleClickAdoption()}
							>
								Adoption applications
							</button> */}

							<button
								className="dashboard-btns"
								onClick={() => handleClickPetFounded()}
							>
								Pets found application
							</button>
							{/* <button
								className="dashboard-btns"
								onClick={() => handleClickNonAvailablePets()}
							>
								Pending pets
							</button> */}
							<Link to={"/hello"} className="buttons-container">
								<button className="btn-back-to-website">
									Go back to website
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DashboardAdmin;
