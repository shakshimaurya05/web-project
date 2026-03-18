import React, { useState, useEffect } from "react";
import './profile.css';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyData = {
      name: "Shakshi Kumari Maurya",
      bio: "Passionate learner exploring web development and building cool projects.",
      portfolio: "https://myportfolio.com",
      location: "India",
      profilePic: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
      skillsToTeach: [
        { skillName: "React" },
        { skillName: "JavaScript" },
        { skillName: "SQL" }
      ],
      skillsToLearn: ["Node.js", "UI/UX", "System Design"]
    };

    setUserData(dummyData);
  }, []);

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-page-container">

      <motion.div
       className="profile-card"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="profile-header">
          <div className="image-container">
            <img src={userData?.profilePic} alt="Profile" className="profile-img" />
          </div>
          <h1>{userData?.name}</h1>
        </div>

        <div className="profile-content">
          <section className="profile-section">
            <h1>My Profile</h1>
            <h3>About Me</h3>
            <p>{userData?.bio}</p>

            <h3>Portfolio link</h3>
            <p>{userData?.portfolio}</p>

            <h3>Location</h3>
            <p>{userData?.location}</p>
          </section>

          <div className="skills-grid">
            <section className="profile-section">
              <h3>My Skills</h3>
              <div className="skill-tags">
                {userData?.skillsToTeach?.map(skill => (
                  <span key={skill.skillName} className="tag share">
                    {skill.skillName}
                  </span>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <h3>Interests</h3>
              <div className="skill-tags">
                {userData?.skillsToLearn?.map(skill => (
                  <span key={skill} className="tag learn">
                    {skill}
                  </span>
                ))}
              </div>
              <br />
            </section>
          </div>
        </div>

        <div className="profile-footer">
          <button className="swap-btn" onClick={() => navigate("/home")}>
            Start Swapping
          </button>
          <button className="edit-btn" onClick={() => navigate("/edit-profile")}>
            Edit Profile
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default Profile;