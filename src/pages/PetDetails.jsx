import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import myApi from "../../service/api";

import React from "react";

function PetDetails({ handleAddToFavorite }) {
  // Automatic scroll to top when landing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [petDetails, setPetDetails] = useState([]);
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const { petId } = useParams();

  useEffect(() => {
    myApi
      .get(`/api/pets/${petId}`)
      .then((response) => {
        setPets(response.data);
      })
      .catch((e) => console.log(e));
  }, [petId]);

  if (!petDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="content-page-container">
        <h1>
          <span className="green">{pets.name} 🐾</span>
        </h1>

        <div className="detail-image">
          <img src={pets.photo} />
        </div>
        <div className="detail-content">
          <h5 className="detail-breed">{pets.breed}</h5>
          <h5 className="detail-location">Currently in {pets.location}</h5>
          <p className="detail-infos">
            {pets.gender} • {pets.color} • {pets.rangeAge} • {pets.size}
          </p>
          <p className="detail-description">{pets.description}</p>
        </div>

        <Link to={`/adopt-a-pet/${pets._id}`}>
          <button className="btn-go-to-adopt-form">
            I want to adopt {pets.name}
          </button>
        </Link>

        <Link
          to={{
            path: "/favorites",
          }}
        >
          <button
            className="btn-add-to-favorites"
            onClick={() => handleAddToFavorite(pets)}
          >
            Add {pets.name} to favorites ❤️
          </button>
        </Link>
      </div>
    </>
  );
}

export default PetDetails;
