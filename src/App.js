import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
