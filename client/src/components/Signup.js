import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await axios.post("http://localhost:3002/api/register", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3002/",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration successful");
      history.push("/");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              {/* <form className="register-form" id="register-form"> */}
              <h2 className="signup-title">signup</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                    <span className="space"> </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="on"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="your name"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                    <span className="space"> </span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="on"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone"></i>
                    <span className="space"> </span>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="on"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="your Phone"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-account"></i>
                    <span className="space"> </span>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="your Occupation"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                    <span className="space"> </span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="your Password"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock"></i>
                    <span className="space"> </span>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Password"
                    />
                  </label>
                </div>
                {/* <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="button"
                    aria-pressed="false"
                    autocomplete="off"
                    onClick={PostData}
                  >
                    Register
                  </button> */}
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />

                  <div className="signup-image" id="signup">
                    {/* <figure>
                    <img src={signup} alt="registration-pic" width="400px" />
                  </figure> */}
                    <NavLink to="/login" className="signup-title">
                      AlreadyRegistered?
                    </NavLink>
                  </div>
                </div>
              </form>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
