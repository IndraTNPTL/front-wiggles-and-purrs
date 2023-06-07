function AdoptionForm() {
  return (
    <div className="content-page-container">
      <div className="nav-btns"> </div>

      <h1>Adoption Form 🐾</h1>
      <form className="writeForm">
        <input type="file" id="fileInput" style={{ display: "none" }} />

        <label>Adopter Name</label>
        <input
          type="user"
          className="writeInput"
          placeholder="Enter your name..."
        />
        <label>Your Email</label>
        <input
          type="text"
          className="writeInput"
          placeholder="Enter your email..."
        />
        <label>Pet Name</label>
        <input
          type="name"
          className="writeInput"
          placeholder="Enter pet name..."
        />
        <label>Specie</label>
        <input
          type="specie"
          className="writeInput"
          placeholder="Dog, cat or hedgehog..."
        />

        <button className="writeSubmit">Submit</button>
      </form>
    </div>
  );
}

export default AdoptionForm;
