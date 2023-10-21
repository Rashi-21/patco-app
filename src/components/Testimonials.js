import React from "react";
import ProfilePic from "../Assets/profile-pic.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Say About Our Passion?</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Video lectures from the crux of IIDE's student and corporate
          training curriculums. So creating content matching global
          education standards is paramount. TRC promptly adapted to
          brand guidelines & delivered quality animation that brought
          our experts' explanation to life.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Bhumit Gor</h2>
        <p>Co-Founder & Guitarist, Last Minute Band</p>
      </div>
    </div>
  );
};

export default Testimonial;
