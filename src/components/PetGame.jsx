import React, { useState, useEffect } from "react";
import Rabbit from "../assets/Rabbit.gif";
import Carrot from "../assets/Carrot.png";

const PetGame = () => {
	const [name, setName] = useState("");
	// const [hunger, setHunger] = useState(0);
	const [feedCooldown, setFeedCooldown] = useState(false);
	const [countdown, setCountdown] = useState(10);
	const [showStats, setShowStats] = useState(false);

	useEffect(() => {
		const countdownDuration = 10; // 10 seconds
		const countdownInterval = 1; // 1 second interval
		let countdownTimeout;

		const startCountdown = () => {
			setCountdown(countdownDuration);

			countdownTimeout = setInterval(() => {
				setCountdown(
					(prevCountdown) => prevCountdown - countdownInterval
				);
			}, countdownInterval * 1000); // Multiply by 1000 to convert to milliseconds
		};

		const stopCountdown = () => {
			clearInterval(countdownTimeout);
			setCountdown(0);
		};

		if (feedCooldown) {
			startCountdown();
		} else {
			stopCountdown();
		}

		return () => {
			stopCountdown();
		};
	}, [feedCooldown]);

	const formatTime = (time) => {
		return `${time}s`;
	};

	const feedPet = () => {
		if (!feedCooldown) {
			setFeedCooldown(true);
			// setHunger(100);
			setShowStats(true);

			setTimeout(() => {
				setFeedCooldown(false);
				// setHunger(0);
			}, 10000); // Set the cooldown duration to 10 seconds (10,000 milliseconds)
		}
	};

	// useEffect(() => {
	//   if (hunger <= 0) {
	//     alert("Click on the CARROT 🥕");
	//   }
	// }, [hunger]);

	useEffect(() => {
		if (countdown === 0) {
			setShowStats(false);
		}
	}, [countdown]);

	return (
		<>
			{/* <h1>Feed Me</h1> */}
			{!showStats && (
				<button
					className="btn-bun-bun"
					onClick={feedPet}
					disabled={feedCooldown}
				>
					<img className="carrot" src={Carrot} alt="Pet Animation" />
				</button>
			)}
			{showStats && (
				<div className="animate-bunny">
					<h2>{name}</h2>
					{/* <p>Hunger: {hunger}</p> */}
					<p>
						{feedCooldown && (
							<img
								className="rabbit"
								src={Rabbit}
								alt="Pet Animation"
							/>
						)}
						<p className="countdown">{formatTime(countdown)}</p>
					</p>
				</div>
			)}
		</>
	);
};

export default PetGame;
