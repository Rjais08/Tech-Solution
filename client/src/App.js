import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Architect from "./components/services/Architect";
import Barber from "./components/services/Barber";
import Cameraman from "./components/services/Cameraman";
import Carpenter from "./components/services/Carpenter";
import Chef from "./components/services/Chef";
import Driver from "./components/services/Driver";
import Electrician from "./components/services/Electrician";
import Painter from "./components/services/Painter";
import Plumber from "./components/services/Plumber";
import ErrorPage from "./components/Errorpage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/services/architect">
          <Architect />
        </Route>
        <Route path="/services/barber">
          <Barber />
        </Route>
        <Route path="/services/cameraman">
          <Cameraman />
        </Route>
        <Route path="/services/carpenter">
          <Carpenter />
        </Route>
        <Route path="/services/chef">
          <Chef />
        </Route>
        <Route path="/services/driver">
          <Driver />
        </Route>
        <Route path="/services/electrician">
          <Electrician />
        </Route>
        <Route path="/services/painter">
          <Painter />
        </Route>
        <Route path="/services/plumber">
          <Plumber />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
