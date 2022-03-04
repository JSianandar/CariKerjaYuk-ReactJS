import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="/w3images/team1.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="/w3images/team2.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="/w3images/team3.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
