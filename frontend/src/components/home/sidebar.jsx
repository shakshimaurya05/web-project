import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Mobile Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      
      <motion.aside
        className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-circle-user"></i> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Discover Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-skills"
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-bars"></i> My Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-comment"></i> Messages
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-sun"></i> Settings
            </NavLink>
          </li>
        </ul>
      </motion.aside>
    </>
  );
};

export default Sidebar;