import React from "react";
import "./About.css";
import { members } from "../Game/Template/Data/data";

const About = () => {
  const member = [
    {
      name: "EL MACHHOUNE Mohamed",
      image: members[0],
      job: "UX/UI Designer Web Developer",
    },
    {
      name: "DRIOUCH Omar",
      image: members[1],
      job: "Web Developer",
    },
    {
      name: "BOUADEL Ali",
      image: members[2],
      job: "Web Developer",
    },
    {
      name: "TIJANI Abdellatif",
      image: members[3],
      job: "Coach",
    },
    {
      name: "ELAQUAN Mohamed",
      image: members[4],
      job: "Web Developer",
    },
    {
      name: "MARGAA Malak",
      image: members[5],
      job: "Web Designer",
    },
    {
      name: "Dr. BENKIRANE Salma",
      image: members[6],
      job: "Child and adolescent psychiatrist",
    },
  ];
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="content-top">
          <div className="about-heading">
            <h1>About Us</h1>
          </div>
          <div className="about-goMyKid">
            <p>
              Welcome to GoMyKid, where learning about children's rights is as
              exciting as playing a game!.
            </p>
            <p>
              At GoMyKid, we're a passionate team of developers, designers,
              child psychologists, and educators dedicated to creating an
              innovative platform that empowers children to understand their
              rights while having fun. Our team brings together diverse
              expertise to ensure that every aspect of our platform is engaging,
              informative, and safe for children of all ages.
            </p>
            <p>
              Led by Dr. BENKIRANE salma, our child psychiatrist, we prioritize
              the mental and emotional well-being of every child who interacts
              with our platform. We integrate principles of child development
              and psychology into our games and content, ensuring that learning
              about rights is not only educational but also nurturing for young
              minds.
            </p>
          </div>
        </div>
        <div className="content-bottom">
          <div className="about-team-heading">
            <h1>Meet the team</h1>
          </div>
          <div className="team-members">
            {member.map((member) => (
              <div className="member-card">
                <div className="member-image">
                  <img src={member.image} alt="##" />
                </div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-job">{member.job}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
