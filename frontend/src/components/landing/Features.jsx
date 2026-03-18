import { motion } from "framer-motion";
import { FaExchangeAlt, FaUsers, FaStar, FaLock } from "react-icons/fa";
import "./Features.css";

const features = [
  {
    icon: FaExchangeAlt,
    title: "Skill Exchange",
    desc: "Trade your skills with others without spending money."
  },
  {
    icon: FaUsers,
    title: "Community Learning",
    desc: "Connect with people and grow together as a community."
  },
  {
    icon: FaStar,
    title: "Ratings & Trust",
    desc: "Build credibility through reviews and ratings."
  },
  {
    icon: FaLock,
    title: "Secure Platform",
    desc: "Safe and reliable experience for all users."
  }
];

const Features = () => {
  return (
    <section className="features-section">

      <div className="features-header">
        <h2>Features</h2>
        <p>Everything you need to learn and grow</p>
      </div>

      <div className="features-grid">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Icon className="feature-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default Features;