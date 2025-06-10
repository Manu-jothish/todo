import "./Login.css";

function RegisterPage() {
  return (
    <>
      <div className="main">
        <h1 className="login-head"> Register Page </h1>

        <div className="container">
          <div className="form-container">
            <form action="">
              <label className="login-style">First Name </label>
              <input
                className="Register-email-input"
                type="text"
                placeholder="Enter Email"
              />
              <br />
              <label className="login-style">Last Name</label>
              <input type="text" placeholder="Enter Password" /> <br />
              <label className="login-style">Email </label>
              <input
                className="login-email-input"
                type="email"
                placeholder="Enter Email"
              />
              <br />
              <label className="login-style">Password </label>
              <input type="password" placeholder="Enter Password" /> <br />
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
