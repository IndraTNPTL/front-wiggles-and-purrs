import React, { useState } from "react";
import petFood from "../assets/pet_food.png";

function Donation() {
	const [donationAmount, setDonationAmount] = useState(""); // State to track the donation amount

	const handleAmountClick = (amount) => {
		setDonationAmount(amount); // Update the donation amount state
	};

	const handleDonateClick = () => {
		alert("Thank you for your donation!"); // Display an alert when the user clicks on the "Donate now" button
		setDonationAmount(""); // Clear the donation amount state
	};

	return (
		<div className="donation-container">
			<h2 className="sub-title">
				Your donation will <br />
				make the difference!
			</h2>

			<div className="DonationWidget">
				<img className="pet-food" src={petFood} alt="pet food" />
				<button
					type="button"
					className="DonationWidget_pricePoint"
					onClick={() => handleAmountClick("10€")} // Call the click handler with the desired amount
				>
					10€
				</button>
				<button
					type="button"
					className="DonationWidget_pricePoint"
					onClick={() => handleAmountClick("15€")}
				>
					15€
				</button>
				<button
					type="button"
					className="DonationWidget_pricePoint"
					onClick={() => handleAmountClick("20€")}
				>
					20€
				</button>
			</div>
			<form className="form-item">
				<label className="DonationWidget_copy">
					or enter your own amount
				</label>
				<input
					type="tel"
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
				Donate now 💖
			</button>
		</div>
	);
}

export default Donation;
