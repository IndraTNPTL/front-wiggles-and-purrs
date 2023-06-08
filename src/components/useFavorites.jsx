import { useState, useEffect } from "react";

function useFavorites(initialState) {
	const [favorite, setFavorite] = useState(() => {
		const storedFavorite = localStorage.getItem("favorite");
		return storedFavorite ? JSON.parse(storedFavorite) : initialState;
	});

	useEffect(() => {
		localStorage.setItem("favorite", JSON.stringify(favorite));
	}, [favorite]);

	return [favorite, setFavorite];
}

export default useFavorites;
