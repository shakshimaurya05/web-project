import "./home.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import laptop from "../../assets/lg1.png";

const Banner = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user || "Guest");
  }, []);

  return (
   <section className="banner">
  <div className="banner-container">
<div className="banner-text">
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome {loggedInUser}!
      </motion.h1>

      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Ready to share your skills and learn something new?
      </motion.p>
</div>
      <div
        className="laptop"
       
      >
        <motion.img
          src={laptop}
          alt="banner"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      </div>

    </section>
  );
};

export default Banner;