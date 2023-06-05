// IMPORT UseState
import React, { useState, useEffect } from "react";
import axios from "axios";

function Filter() {
	const [pets, setPets] = useState([]);
	const [filteredPets, setFilteredPets] = useState([]);
	const [filter, setFilter] = useState({
		breed: "",
		gender: "",
		rangeAge: "",
		size: "",
		color: "",
		location: "",
	});

	useEffect(() => {
		axios.get("/pets").then((res) => {
			setPets(res.data);
			setFilteredPets(res.data);
		});
	}, []);

	return (
		<div>
			<h1>Filter Pets</h1>
		</div>
	);
}

export default Filter;
