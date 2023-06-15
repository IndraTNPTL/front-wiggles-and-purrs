import { AuthContext } from "../../service/authContext";
import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";

function isLoggedIn({ children }) {
	// const navigate = useNavigate()
	const { isLoggedIn, isLoading, user } = useContext(AuthContext);
	// console.log(user);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	// console.table(isLoading, isLoggedIn, user);
	if (!isLoggedIn) {
		return <Navigate to={"/"} />;
	}
	if (isLoggedIn) {
		return <Outlet />;
	}
}

export default isLoggedIn;
