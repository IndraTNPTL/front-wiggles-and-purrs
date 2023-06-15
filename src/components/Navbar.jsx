import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/catndog.png";

import { slide as Menu } from "react-burger-menu";
import { AuthContext } from "../../service/authContext";

// IMPORT OUTLET
import { Outlet } from "react-router-dom";

// IMPORT LOGOUT BTN
import LogoutButton from "./LogoutButton";
// import ButtonAdminDash from "./ButtonAdminDash";

function Navbar() {
	const { user, isLoggedIn } = useContext(AuthContext);
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();

	function handleLinkClick() {
		setMenuOpen(false);
	}

	const handleClickDashboard = () => {
		setMenuOpen(false);
		if (isLoggedIn && user.role === "admin") {
			navigate("/admin-dashboard");
		}
	};

	return (
		<>
			<nav>
				<div className="nav-header">
					<Link className="link-to-HP" to="/hello">
						<img className="logo" src={logo} alt="logo" />
					</Link>
				</div>

				<Menu
					isOpen={menuOpen}
					onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
				>
					<Link
						className="menu-item"
						to={"/favorites"}
						onClick={handleLinkClick}
					>
						❤️ My Favorites Pets
					</Link>
					<Link
						className="menu-item"
						to={"/found-a-pet"}
						onClick={handleLinkClick}
					>
						📝 "I Found A Pet" Form
					</Link>
					<Link
						className="menu-item"
						to={"/pets/dog"}
						onClick={handleLinkClick}
					>
						🐶 See Dogs
					</Link>
					<Link
						className="menu-item"
						to={"/pets/cat"}
						onClick={handleLinkClick}
					>
						🐱 See Cats
					</Link>
					<Link
						className="menu-item"
						to={"/pets/hedgehog"}
						onClick={handleLinkClick}
					>
						🦔 See Hedgehogs
					</Link>
					<button
						className="btn-admin-go-to-dash"
						onClick={handleClickDashboard}
					>
						Dashboard
					</button>
					<LogoutButton></LogoutButton>
				</Menu>
			</nav>

			<div className="page-container">
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
