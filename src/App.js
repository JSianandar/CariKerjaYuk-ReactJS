import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import Freelancers from "./pages/Freelancers/Freelancers";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/freelancers" component={Freelancers} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
