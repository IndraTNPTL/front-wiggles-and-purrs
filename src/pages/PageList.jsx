import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import Filter from "../components/Filter";

// import Sort from "../components/Sort";

function PageList() {
	const [pets, setPets] = useState([]);
	const [filteredPets, setfilteredPets] = useState(allPets);
	const [sortedPets, setsortedPets] = useState(allPets);

	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		axios
			.get("/pets")
			.then((res) => {
				setPets(res.data);
			})
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const history = useHistory();

	// useEffect(() => {
	// 	const unsubscribe = authService.onAuthStateChanged((authState) => {
	// 		if (authState) {
	// 			history.push("/protected");
	// 		}
	// 	});

	// 	return () => {
	// 		unsubscribe();
	// 	};
	// }, []);

	if (!pets) {
		return <p>Loading...</p>;
	}

	// return (
	// 	<>
	// 		<button id="filter-button" onClick={handleClick}>
	// 			Filter
	// 		</button>

	// 		{showPopup && (
	// 			<div id="filter-popup">{/* Filter options go here */}</div>
	// 		)}
	// 	</>
	// );
}

export default PageList;
