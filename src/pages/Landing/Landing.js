import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/Slider/ImageSlider";
import { SliderData } from "../../components/Slider/SliderData";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <ImageSlider slides={SliderData} />
      </section>
      <section className="landing_main">
        <div className="landing-inner">
          <h1 className="x-large">A Freelance Marketplace for Indonesians</h1>
          <p className="lead">
            Create a Freelance profile, share your skills, or create Jobs for
            others
          </p>
          <br />
          <p className="lead">This is a work in progress</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
