import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Donation from "../components/Donation";

function Homepage() {
  const navigate = useNavigate();
  // Automatic scroll to top when landing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleClick(specie) {
    navigate(`/pets/${specie}`);
  }

  return (
    <div className="content-page-container">
      <h1>🐾 Hello!🐾</h1>
      <p>
        Welcome to our pet adoption website! Discover your new best friend and
        make a difference in their life. Adopt a pet and experience the joy of
        unconditional love. Start your journey now!
      </p>
      <Donation></Donation>

      <div className="buttons-container">
        <button
          className="homepage-btns dogs-btn"
          onClick={() => handleClick("dog")}
        ></button>

        <button
          className="homepage-btns cats-btn"
          onClick={() => handleClick("cat")}
        ></button>

        <button
          className="homepage-btns hedg-btn"
          onClick={() => handleClick("hedgehog")}
        ></button>
      </div>
    </div>
  );
}

export default Homepage;
