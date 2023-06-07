import "./App.css";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import { useState } from "react";

// Hello
// IMPORT PAGES
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import PageList from "./pages/PageList";
import PetDetails from "./pages/PetDetails";
import About from "./pages/About";
import FoundAPetForm from "./pages/FoundAPetForm";

// IMPORT components
import Footer from "./components/Footer";
import LoggedIn from "./components/LoggedIn";
// import Filter from "./components/Filter";
// import Sort from "./components/Sort";

function App() {
	const specie = "";

	return (
		<>
			<Routes>
				<Route element={<Footer />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />

					<Route element={<LoggedIn />}>
						<Route path="/hello" element={<Homepage />} />
						<Route path="/pets/:specie" element={<PageList />} />
						<Route
							path="/pets/specie/:petId"
							element={<PetDetails />}
						/>
						<Route
							path="/found-a-pet"
							element={<FoundAPetForm />}
						/>
						<Route path="/about" element={<About />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
