import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./sidebar";
import Banner from "./banner";
import Footer from "../layout/footer.jsx";
import "./home.css";

import ProfileModal from "./ProfileModal";

function Home() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const location = useLocation();
  const matchesRef = useRef(null);

  useEffect(() => {
    const dummyMatches = [
      {
        user: {
          _id: "1",
          name: "Sonali Singh",
          profilePic: "",
          skillsToTeach: [{ skillName: "React" }, { skillName: "JavaScript" }],
          skillsToLearn: ["UI/UX", "Node.js"],
          location: "India",
        },
      },
      {
        user: {
          _id: "2",
          name: "Prakriti Priya",
          profilePic: "",
          skillsToTeach: [{ skillName: "SQL" }],
          skillsToLearn: ["React"],
          location: "Delhi",
        },
      },
      {
        user: {
          _id: "3",
          name: "Mrinalini Maurya",
          profilePic: "",
          skillsToTeach: [{ skillName: "Data Analytics" }],
          skillsToLearn: ["Aws"],
          location: "Delhi",
        },
      },
      {
        user: {
          _id: "4",
          name: "Rahul Sharma",
          profilePic: "",
          skillsToTeach: [{ skillName: "SQL" }],
          skillsToLearn: ["React"],
          location: "Delhi",
        },
      },
      {
        user: {
          _id: "5",
          name: "Shweta Yadav",
          profilePic: "",
          skillsToTeach: [{ skillName: "UI/UX" }],
          skillsToLearn: ["JavaScript"],
          location: "Mumbai",
        },
      },
      {
        user: {
          _id: "6",
          name: "Eshika Mathur",
          profilePic: "",
          skillsToTeach: [{ skillName: "AWS" }],
          skillsToLearn: ["React"],
          location: "Delhi",
        },
      },
      {
        user: {
          _id: "7",
          name: "Arya Kuraria",
          profilePic: "",
          skillsToTeach: [{ skillName: "Data Structure" }],
          skillsToLearn: ["Web development"],
          location: "Delhi",
        },
      },
    ];

    setMatches(dummyMatches);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === "matches") {
      setTimeout(() => {
        matchesRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [location]);

  return (
    <div>
      <div className="home-container">
        <Header />
        <Banner />

        <div className="content">
          <Sidebar />

          <main className="main">

            <div className="matches-section" ref={matchesRef}>
              <h2>Your Matches</h2>

              {matches?.length === 0 && (
                <p>
                  No matches found yet.
                  <br />
                  Check if your profile is complete, or try again later.
                </p>
              )}

              <motion.div
                className="matches-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {matches?.map((match) => (
                  <motion.div
                    key={match.user._id}
                    className="match-card"
                    onClick={() => setSelectedMatch(match)}
                    variants={{
                      hidden: { y: 80, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={
                        match.user.profilePic ||
                        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      alt={match.user.name}
                      className="match-img"
                    />

                    <h3>{match.user.name}</h3>

                    <p>
                      Expertise:{" "}
                      {match.user.skillsToTeach?.length
                        ? match.user.skillsToTeach
                            .map((s) => s.skillName)
                            .join(", ")
                        : "None"}
                    </p>

                    <p>
                      Learning Goals:{" "}
                      {match.user.skillsToLearn?.length
                        ? match.user.skillsToLearn.join(", ")
                        : "None"}
                    </p>

                    <p>
                      <strong>Location:</strong>{" "}
                      {match.user.location || "Unknown"}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {selectedMatch && (
                <ProfileModal
                  selectedMatch={selectedMatch}
                  closeModal={() => setSelectedMatch(null)}
                />
              )}
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;