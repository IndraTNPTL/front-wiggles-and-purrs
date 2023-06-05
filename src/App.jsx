import "./App.css";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import { useState } from "react";

// Hello
// IMPORT PAGES
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageList from "./pages/PageList";
import About from "./pages/About";
import FoundAPetForm from "./pages/FoundAPetForm";

// IMPORT COMPONENTS
import Footer from "./Components/Footer";
// import Filter from "./Components/Filter";
// import Sort from "./Components/Sort";

function App() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await axios.post("/auth/login", {
				email,
				password,
			});
			const { authToken } = response.data;

			localStorage.setItem("authToken", authToken);
			setLoading(false);
			setError("");
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};
	return (
		<>
			<Routes>
				<Route element={<Footer />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/login"
						element={<Login handleSubmit={handleSubmit} />}
					/>
					<Route path="/pets" element={<PageList />} />
					<Route path="/found-a-pet" element={<FoundAPetForm />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
