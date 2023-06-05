import headerPic from "../assets/pug.jpeg";

function FoundAPetForm() {
  return (
    <div className="write">
      <span className="writeTitle">I found a pet!</span>
      <img className="writeImg" src={headerPic} alt="picture" />
      <form className="writeForm">
        <label htmlFor="fileInput">
          <i className="writeIcon fa-regular fa-square-plus"> Upload photos</i>
        </label>
        <input type="file" id="fileInput" style={{ display: "none" }} />

        <label>Pet Name</label>
        <input type="name" className="writeInput" placeholder="Enter name..." />
        <label>Specie</label>
        <input
          type="specie"
          className="writeInput"
          placeholder="Dog, cat or hedgehog..."
        />
        <label>Breed</label>
        <input
          type="breed"
          className="writeInput"
          placeholder="Enter breed..."
        />
        <label>Size</label>
        <input
          type="size"
          className="writeInput"
          placeholder="Small, medium or Large..."
        />
        <label>Color</label>
        <input
          type="colorInfo"
          className="writeInput"
          placeholder="Enter color..."
        />
        <button className="writeSubmit">Submit</button>
      </form>
    </div>
  );
}

export default FoundAPetForm;
