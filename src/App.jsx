import "./App.css";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// IMPORT PAGES
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import PostSignup from "./pages/PostSignup";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import PageList from "./pages/PageList";
import PetDetails from "./pages/PetDetails";
import FoundAPetForm from "./pages/FoundAPetForm";
import AdoptionForm from "./pages/AdoptionForm";
import FormSubmitted from "./pages/FormSubmitted";
import Favorites from "./pages/Favorites";
import DashboardAdmin from "./pages/DashboardAdmin";
// import AdoptFormList from "./pages/AdoptFormList";
import PetFoundList from "./pages/PetFoundList";
import PetFoundDetails from "./pages/PetFoundDetails";

// IMPORT components
import Footer from "./components/Footer";
import LoggedIn from "./components/LoggedIn";
import Navbar from "./components/Navbar";

function App() {
	const favoritePets = JSON.parse(localStorage.getItem("favorite")) || [];
	const [favoritePet, setFavoritePet] = useState(favoritePets);

	function handleAddToFavorite(pet) {
		const existingPet = favoritePet.find(
			(favoritePet) => favoritePet._id === pet._id
		);
		if (existingPet) {
			alert(
				`${pet.name} is already one of your favorites! Thinking about adopting?`
			);
			return;
		}
		setFavoritePet((previousFavoritePet) => [...previousFavoritePet, pet]);
		localStorage.setItem("favorite", JSON.stringify([...favoritePet, pet]));

		// Display message in the UI that fades out after a few seconds
		const message = `${pet.name} added to favorites!`;
		const messageElement = document.createElement("div");
		messageElement.textContent = message;
		messageElement.classList.add("favorite-message");
		document.body.appendChild(messageElement);
		setTimeout(() => {
			messageElement.remove();
		}, 3000);
	}

	function handleDelete(id) {
		const updatedFavoritePet = favoritePet.filter((pet) => pet._id !== id);
		setFavoritePet(updatedFavoritePet);
		localStorage.setItem("favorite", JSON.stringify(updatedFavoritePet));
	}

	function handleEmptyFavorite() {
		localStorage.removeItem("favorite");
		setFavoritePet([]);
	}

	return (
		<>
			<Routes>
				<Route element={<Footer />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/thank_you_for_joining"
						element={<PostSignup />}
					/>
					<Route path="/login" element={<Login />} />

					<Route element={<LoggedIn />}>
						<Route element={<Navbar />}>
							<Route path="/hello" element={<Homepage />} />
							<Route
								path="/pets/:specie"
								element={
									<PageList
										handleAddToFavorite={
											handleAddToFavorite
										}
									/>
								}
							/>
							<Route
								path="/pets/specie/:petId"
								element={
									<PetDetails
										handleAddToFavorite={
											handleAddToFavorite
										}
									/>
								}
							/>
							<Route
								path="/found-a-pet"
								element={<FoundAPetForm />}
							/>
							<Route
								path="/adopt-a-pet/:id"
								element={<AdoptionForm />}
							/>
							<Route
								path="/thank-you"
								element={<FormSubmitted />}
							/>
							<Route
								path="/favorites"
								element={
									<Favorites
										favoritePet={favoritePet}
										handleDelete={handleDelete}
										handleEmptyFavorite={
											handleEmptyFavorite
										}
									/>
								}
							/>
						</Route>
						<Route
							path="/admin-dashboard"
							element={<DashboardAdmin />}
						/>
						{/* <Route
							path="/admin-dashboard/adoption-forms"
							element={<AdoptFormList />}
						/> */}
						<Route
							path="/admin-dashboard/pet-found-list"
							element={<PetFoundList />}
						/>
						<Route
							path="/admin-dashboard/pet-found-details/:id"
							element={<PetFoundDetails />}
						/>
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
