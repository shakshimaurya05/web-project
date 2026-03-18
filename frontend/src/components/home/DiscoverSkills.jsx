import React, { useState, useEffect } from "react";
import ProfileModal from "./ProfileModal";
import "./home.css";
import Sidebar from "./sidebar";
import Header from "./Header";
function DiscoverSkills() {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [usersForSkill, setUsersForSkill] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // dummy data
  const dummySkills = ["React", "JavaScript", "SQL", "UI/UX", "Node.js"];

  const dummyUsers = [
    {
      _id: "1",
      name: "Aditya Maurya",
      profilePic: "",
      skillsToTeach: [{ skillName: "React" }, { skillName: "JavaScript" }],
      skillsToLearn: ["UI/UX", "Node.js"],
    },
    {
      _id: "2",
      name: "Rahul Sharma",
      profilePic: "",
      skillsToTeach: [{ skillName: "SQL" }],
      skillsToLearn: ["React"],
    },
    {
      _id: "3",
      name: "Priya Singh",
      profilePic: "",
      skillsToTeach: [{ skillName: "UI/UX" }],
      skillsToLearn: ["JavaScript"],
    },
    {
      _id: "7",
      name: "Arya Kuraria",
      profilePic: "",
      skillsToTeach: [{ skillName: "Data Structure" }],
      skillsToLearn: ["Web development"],
      location: ["Delhi"],
    },
  ];

  useEffect(() => {
    setSkills(dummySkills);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);

    const filteredUsers = dummyUsers.filter((user) =>
      user.skillsToTeach.some((s) => s.skillName === skill)
    );

    setUsersForSkill(filteredUsers.map((user) => ({ user })));
  };

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
        <Header />

      <div className="content">
        
        <Sidebar />

        <div className="main">
          {!selectedSkill ? (
            <>
              <h2>Discover Skills</h2>

              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />

              <div className="skills-grid">
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-card"
                      onClick={() => handleSkillClick(skill)}
                    >
                      {skill}
                    </div>
                  ))
                ) : (
                  <p>No skills found.</p>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                className="back-btn"
                onClick={() => {
                  setSelectedSkill(null);
                  setUsersForSkill([]);
                }}
              >
                Back to skills
              </button>

              <h3>Users for {selectedSkill}</h3>

              <div className="matches-grid">
                {usersForSkill.length > 0 ? (
                  usersForSkill.map((userObj) => (
                    <div
                      key={userObj.user._id}
                      className="match-card"
                      onClick={() => setSelectedUser(userObj)}
                    >
                      <img
                        src={
                          userObj.user.profilePic ||
                          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt={userObj.user.name}
                        className="match-img"
                      />

                      <h4>{userObj.user.name}</h4>

                      <p>
                        Expertise:{" "}
                        {userObj.user.skillsToTeach?.length
                          ? userObj.user.skillsToTeach
                              .map((s) => s.skillName)
                              .join(", ")
                          : "None"}
                      </p>

                      <p>
                        Learning Goals:{" "}
                        {userObj.user.skillsToLearn?.length
                          ? userObj.user.skillsToLearn.join(", ")
                          : "None"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No users found for this skill.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    

      {selectedUser && (
        <ProfileModal
          selectedMatch={selectedUser}
          closeModal={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

export default DiscoverSkills;