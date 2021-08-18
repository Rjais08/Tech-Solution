import { React, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState(" ");

  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credential");
    } else {
      window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-image" id="signup">
              {/* <figure>
                <img src={loginpic} alt="registration-pic" width="400px" />
              </figure> */}
            </div>
            <div className="signup-form">
              <h2 className="signup-title">LogIn</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group"></div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                    <span className="space"></span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="on"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                    <span className="space"></span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="your Password"
                    />
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
                <NavLink to="/signup" className="logiin">
                  Not-Registered?
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
