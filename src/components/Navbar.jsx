import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import logo from "../assets/catndog.png";
import { slide as Menu } from "react-burger-menu";

// IMPORT OUTLET
import { Outlet } from "react-router-dom";

// IMPORT LOGOUT BTN
import LogoutButton from "./LogoutButton";

function Navbar() {
	// const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	function handleLinkClick() {
		setMenuOpen(false);
	}

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
						to={"/found-a-pet"}
						onClick={handleLinkClick}
					>
						I FOUND A PET!
					</Link>
					<Link
						className="menu-item"
						to={"/favorites"}
						onClick={handleLinkClick}
					>
						❤️ MY FAVOURITES PETS
					</Link>
					<Link
						className="menu-item"
						to={"/pets/dog"}
						onClick={handleLinkClick}
					>
						SEE DOGS
					</Link>
					<Link
						className="menu-item"
						to={"/pets/cat"}
						onClick={handleLinkClick}
					>
						SEE CATS
					</Link>
					<Link
						className="menu-item"
						to={"/pets/hedgehog"}
						onClick={handleLinkClick}
					>
						SEE HEDGEHOGS
					</Link>

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
