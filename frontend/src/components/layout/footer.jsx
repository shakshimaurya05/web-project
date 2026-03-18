export default function Footer() {
  return (
    <footer
      style={{
        background: "#e3ecfb",
        color: "black",
        padding: "50px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px"
        }}
      >
        {/* BRAND */}
        <div>
          <h2><i className="fa-solid fa-infinity"></i> SkillSwap</h2>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Learn, teach, and grow together. Connect with people and exchange skills effortlessly.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            <li><i className="fa-solid fa-house"></i> Home</li>
            <li><i className="fa-solid fa-magnifying-glass"></i> Discover Skills</li>
            <li><i className="fa-solid fa-bars"></i> My Skills</li>
            <li><i className="fa-solid fa-user"></i> Profile</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3>Support</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            <li><i className="fa-solid fa-circle-question"></i> Help Center</li>
            <li><i className="fa-solid fa-question"></i> FAQs</li>
            <li><i className="fa-solid fa-envelope"></i> Contact Us</li>
            <li><i className="fa-solid fa-shield-halved"></i> Privacy Policy</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3>Follow Us</h3>
          <div style={{ marginTop: "10px", display: "flex", gap: "15px", fontSize: "20px" }}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          paddingTop: "15px",
          fontSize: "14px"
        }}
      >
        © 2025 SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}