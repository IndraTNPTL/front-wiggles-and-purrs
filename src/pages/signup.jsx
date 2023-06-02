export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Sign Up</button>
      </form>
      <button className="registerLoginButton">
        {/* <Link className="link" to="/login"> */}
        Login
        {/* </Link> */}
      </button>
    </div>
  );
}
