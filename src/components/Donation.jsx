import React, { useState } from "react";
import petFood from "../assets/pet food.png";

function Donation() {
  const [donationAmount, setDonationAmount] = useState(""); // State to track the donation amount

  const handleAmountClick = (amount) => {
    setDonationAmount(amount); // Update the donation amount state
  };

  const handleDonateClick = () => {
    setDonationAmount(""); // Clear the donation amount state
  };

  return (
    <div className="content-page-container">
      <div className="donation-container">
        <h1> 🐾 How much would you like to donate? </h1>

        <div className="DonationWidget">
          <img className="pet-food" src={petFood} alt="pet food" />
          <button
            id="w-single-amt1"
            type="button"
            className="DonationWidget_pricePoint"
            onClick={() => handleAmountClick("10€")} // Call the click handler with the desired amount
          >
            10€
          </button>
          <button
            id="w-single-amt2"
            type="button"
            className="DonationWidget_pricePoint"
            onClick={() => handleAmountClick("15€")}
          >
            15€
          </button>
          <button
            id="w-single-amt3"
            type="button"
            className="DonationWidget_pricePoint"
            onClick={() => handleAmountClick("20€")}
          >
            20€
          </button>
        </div>
        <form className="form-item">
          <label htmlFor="w-own-amt" className="DonationWidget_copy">
            enter your own amount
          </label>
          <input
            type="tel"
            className=""
            placeholder="Enter amount..."
            value={donationAmount} // Set the value of the input field to the donation amount state
            onChange={(e) => setDonationAmount(e.target.value)} // Update the donation amount state on input change
          />
        </form>
        <button
          type="submit"
          className="btn-donation"
          onClick={handleDonateClick}
        >
          Donation
        </button>
      </div>
    </div>
  );
}

export default Donation;
