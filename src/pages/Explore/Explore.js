import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
import CardExplore from "../../components/CardExplore/CardExplore";

const Explore = () => {
  return (
    <div className="project">
      <div className="title">
        <p>Available Services</p>
        <Link>See other Services</Link>
      </div>
      <div className="card">
        <CardExplore />
        <CardExplore />
        <CardExplore />
        <CardExplore />
        <CardExplore />
      </div>
    </div>
  );
};

export default Explore;
