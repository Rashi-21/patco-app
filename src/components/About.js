import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-subheading">About Us</h1>
        <h1 className="primary-heading">
          Delivering Stunning Visuals Narratives
        </h1>o
        <p className="primary-text">
          From concept to final edit, we tailor our productioon process to
          suit your unique needs, ensuring the highest quality results.
        </p>
        <p className="primary-text">
            Patco Productions has earned its reputation in the market  
            for its services. We aim to grow as the most prominent firm for  
            our Customers, Business Associates & Stakeholders and we  
            take pride that the intense vision of our experienced personnel  
            encourages us to create a niche in the industry by serving  
            clients across the globe.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
