import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../service/AuthContext";
import service from "../../service/api";

import headerPic from "../assets/pug.jpeg";

function FoundAPetForm() {
  const navigate = useNavigate();

  // !MIGHT WON'T NEEDED
  const { authenticateUser } = useContext(AuthContext);

  // Automatic scroll to top when landing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    specie: "",
    breed: "",
    size: "",
    color: "",
  });
  console.log(formData);

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await service.post(
        "http://localhost:3000/api/found-a-pet",
        formData
      );

      if (response.data) {
        await authenticateUser();
        navigate("/thank-you");
      } else {
        setError(response.status);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="content-page-container">
      <h1>I found a pet! 🐾 </h1>

      <img className="writeImg" src={headerPic} alt="picture" />

      <form className="writeForm" onSubmit={handleSubmit}>
        {/* <label htmlFor="fileInput">
					<i className="writeIcon fa-regular fa-square-plus">
						{" "}
						Upload photos
					</i>
				</label>
				<input type="file" id="fileInput" style={{ display: "none" }} /> */}

        <label>Pet Name</label>
        <input
          type="text"
          className="landingInput"
          placeholder="Enter pet name..."
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />

        <label>Specie</label>
        <select
          className="landingInput"
          name="pets"
          id="pet-select"
          value={formData.specie}
          onChange={(event) =>
            setFormData({ ...formData, specie: event.target.value })
          }
        >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hedgehog">Hedgehog</option>
        </select>

        <label>Breed</label>
        <select
          className="landingInput"
          name="pets"
          id="pet-select"
          value={formData.breed}
          onChange={(event) =>
            setFormData({ ...formData, breed: event.target.value })
          }
        >
          <option value="">--Please choose an option--</option>
          <option value="Husky">Husky</option>
          <option value="Akita">Akita</option>
          <option value="Shepherd">Shepherd</option>
        </select>

        <label>Size</label>
        <select
          className="landingInput"
          name="pets"
          id="pet-select"
          value={formData.size}
          onChange={(event) =>
            setFormData({
              ...formData,
              size: event.target.value,
            })
          }
        >
          <option value="">--Please choose an option--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label>Color</label>
        <input
          type="text"
          className="landingInput"
          placeholder="Enter pet color..."
          value={formData.color}
          onChange={(event) =>
            setFormData({ ...formData, color: event.target.value })
          }
        />
        {error && <p className="error-message">{error}</p>}
        <div className="go-to-auth-ctas">
          <div className="go-to-signup">
            <button className="btn-send-form" type="submit">
              Send my application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FoundAPetForm;
