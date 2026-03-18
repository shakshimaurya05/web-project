import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./editProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();

  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [skillsToLearn, setSkillsToLearn] = useState([]);
  const [skillsToTeach, setSkillsToTeach] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Get data from localStorage instead of backend
      const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};

      setBio(storedProfile.bio || "");
      setLocation(storedProfile.location || "");
      setPortfolio(storedProfile.portfolio || "");
      setProfilePic(storedProfile.profilePic || "");
      setSkillsToLearn(storedProfile.skillsToLearn || []);
      setSkillsToTeach(storedProfile.skillsToTeach || []);
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSave = () => {
    try {
      //  Save to localStorage instead of backend
      const updatedProfile = {
        bio,
        location,
        portfolio,
        profilePic,
        skillsToLearn,
        skillsToTeach,
      };

      localStorage.setItem("profile", JSON.stringify(updatedProfile));

      navigate("/profile");
    } catch (error) {
      console.error("Save profile error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading profile...</p>;
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h1>Edit Profile</h1>

        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Portfolio</label>
        <input
          type="text"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />

        <label>Profile Picture URL</label>
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <label>Skills to Learn (comma separated)</label>
        <input
          type="text"
          value={skillsToLearn.join(", ")}
          onChange={(e) =>
            setSkillsToLearn(
              e.target.value.split(",").map((s) => s.trim())
            )
          }
        />

        <label>Skills to Teach (comma separated)</label>
        <input
          type="text"
          value={skillsToTeach.map((s) => s.skillName).join(", ")}
          onChange={(e) =>
            setSkillsToTeach(
              e.target.value.split(",").map((skill) => ({
                skillName: skill.trim(),
              }))
            )
          }
        />

        <div className="edit-profile-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => navigate("/profile")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;