import { useEffect } from "react";

// IMPORT Link
import { Link } from "react-router-dom";

import myApi from "../../service/api";

function Favorites({ favoritePet, handleDelete, handleEmptyFavorite }) {
	// Automatic scroll to top when landing
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="content-page-container">
			<h1>Favorites Pets ❤️</h1>

			{favoritePet.length > 0 ? (
				<table>
					<tbody>
						{favoritePet.map((pet) => (
							<tr key={pet._id} className="pet-row">
								<td className="favorite-img">
									<img src={pet.photo}></img>
								</td>
								<td className="td-margin td-name">
									{pet.name}
								</td>

								{/* <td className="td-margin">{pet.location}</td> */}

								<td className="delete">
									<div className="action">
										<button
											className="btn-delete"
											onClick={() =>
												handleDelete(pet._id)
											}
										>
											Remove
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h2 className="empty-favorite">
					Your favorite list is empty, go see our available pets!
				</h2>
			)}
			<div className="favorite-ctas">
				<Link to="/hello">
					<button className="btn-go-browse">Browse pets</button>
				</Link>

				<button className="btn-empty" onClick={handleEmptyFavorite}>
					Empty my list
				</button>
			</div>
		</div>
	);
}

export default Favorites;
