import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer"
      style={{ marginTop: "50px", backgroundColor: "gray" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5> Links </h5>{" "}
            <ul className="list-unstyled">
              <li>
                <Link to="/"> Home </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/about"> About </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/contact"> Contact us </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="col-7 col-sm-5">
            <h5>
              <i className="fa fa-map-marker fa-lg"></i> Our Address{" "}
            </h5>{" "}
            <address>
              Ashok Rajpath NIT Patna, <br />
              Patna, <br />
              Bihar (800005) <br />
              <i className="fa fa-phone fa-dark"> </i>: +91 *********** <br />
              <i className="fa fa-fax fa-lg"> </i>: +91 **********
              <br />
              <i className="fa fa-envelope fa-lg"> </i>:{" "}
              <Link to="mailto:rajeshkumarfzd101199@gmail.com">
                {" "}
                techsolution@tech.net{" "}
              </Link>{" "}
            </address>{" "}
          </div>{" "}
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <Link
                className="btn btn-social-icon btn-google"
                to="http://gmail.com/rahulj.ug18.ec@nitp.ac.in"
              >
                <i className="fa fa-google-plus"> </i>{" "}
              </Link>{" "}
              <Link
                className="btn btn-social-icon btn-facebook"
                to="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"> </i>{" "}
              </Link>{" "}
              <Link
                className="btn btn-social-icon btn-linkedin"
                to="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"> </i>{" "}
              </Link>{" "}
              <Link
                className="btn btn-social-icon btn-twitter"
                to="http://twitter.com/"
              >
                <i className="fa fa-twitter"> </i>{" "}
              </Link>{" "}
              <Link
                className="btn btn-social-icon btn-google"
                to="http://youtube.com/"
              >
                <i className="fa fa-youtube"> </i>{" "}
              </Link>{" "}
              <Link
                className="btn btn-social-icon"
                to="#"
                onClick={e =>{window.location = "mailto:rahulj.ug18.ec@nitp.ac.in";
              e.preventDefault()}}
              >
                {/* <a className="btn btn-social-icon" href=""> */}
                  <i className="fa fa-envelope-o"> </i>
                {/* </a> */}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="row justify-content-center">
          <div className="col-auto">
            <p> ©Copyright 2021 Tech-Solution </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Footer;
