import "./Login.css"

function LoginPage() {
  return (
    <>
    <div className="main">
      <h1 className="login-head"> Login Page </h1>

      <div className="container">
        <div className="form-container">

            <form action="">
                <label className="login-style">Email </label>
                <input className="login-email-input" type="email" placeholder="Enter Email"/><br/>
                <label className="login-style">Password </label>
                <input type="password" placeholder="Enter Password"/> <br/>
                <button  className="login-btn" type="submit">Login</button>
            </form>
        </div>
      </div>
      </div> 
    </>
  );
}
export default LoginPage;