import petFood from "../assets/pet food.png";

function Donation() {
  return (
    <div className="content-page-container">
      <div className="nav-btns"></div>

      <h1> 🐾 How much would you like to donate? </h1>

      <div className="DonationWidget">
        <img className="pet-food" src={petFood} alt="pet food" />
        <button
          id="w-single-amt1"
          type="button"
          className="DonationWidget_pricePoint"
        >
          5€
        </button>
        <button
          id="w-single-amt1"
          type="button"
          className="DonationWidget_pricePoint"
        >
          10€
        </button>
        <button
          id="w-single-amt1"
          type="button"
          className="DonationWidget_pricePoint"
        >
          15€
        </button>
      </div>
      <form className="form-item">
        <label htmlFor="w-own-amt" className="DonationWidget_copy">
          enter your own amount
        </label>
        <input type="tel" className="" placeholder="Enter amount..." />
      </form>
      <button type="submit" className="btn-donation">
        Donation
      </button>
    </div>
  );
}

export default Donation;
