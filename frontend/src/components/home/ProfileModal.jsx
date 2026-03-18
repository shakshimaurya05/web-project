import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "./home.css";

function ProfileModal({ selectedMatch, closeModal }) {
  if (!selectedMatch) return null;

  const user = selectedMatch.user || {};

  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="profile-modal"
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button className="close-btn" onClick={closeModal}>
          <AiOutlineClose size={14} />
        </button>

        <h2>{user.name || "Unknown User"}</h2>

        {user.bio && (
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        )}

        <p>
          <strong>Location:</strong> {user.location || "Unknown"}
        </p>

        <p>
          <strong>Expertise:</strong>{" "}
          {user.skillsToTeach?.length
            ? user.skillsToTeach.map((s) => s.skillName).join(", ")
            : "None"}
        </p>

        <p>
          <strong>Learning Goals:</strong>{" "}
          {user.skillsToLearn?.length
            ? user.skillsToLearn.join(", ")
            : "None"}
        </p>

        {user.portfolio && (
          <p>
            <strong>Portfolio:</strong>{" "}
            <a
              href={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Portfolio
            </a>
          </p>
        )}

        <button className="chat-btn">
          Chat with {user.name || "User"}
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ProfileModal;