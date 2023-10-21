import React from "react";

const Work = () => {
  const workInfoData = [
    {
      title: "Scripting And Story Boarding",
      text: "Crafting compelling scripts and detailed storyboards that breathe life into your vision. With our Transforming ideas into captiving stories through expert scripting and mmeticulous storyboardimg. Every word and frame is carefully crafted to captivate and engage your audience. Trust us to bring your vision to life with precision and creativity. Elevate your project with our comprehensive scripting and storyboarding services.",
    },
    {
      title: "Pre-Production And Shoot",
      text: "We  focus on key elements to ensure a seamless shoot or video production. Our experienced team conducts thorough location scouting to find captivating settings that align with your creative vision. WWith a team of skilled professionals and state-of-the-art equipment, we ensure a seamlless and high-quality production experience. During production, we meticulously execute the plans and creative concepts developed during pre-production.",
    },
    {
      title: "Post Production",
      text: "In the post-production phase, we bring together all the elements to polish and enhance your video, ensuring a seamless and captivating final product. Our skilled team utilises advanced editing, color grading, animation, and sound integration techniques to elevate your footage. We strive for excellence, continuously refining and polishing your video until it reaches its full potential. Let us transform your raw footage into a polished masterpiece.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Process</p>
        <h1 className="primary-heading">Our Creative Video Production Process</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;