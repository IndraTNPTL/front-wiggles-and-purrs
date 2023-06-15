import { useContext } from "react";
import { AuthContext } from "../../service/authContext";

function LogoutButton() {
	const { logout } = useContext(AuthContext);

	return (
		<button className="btn-logout" onClick={logout}>
			Logout
		</button>
	);
}

export default LogoutButton;
