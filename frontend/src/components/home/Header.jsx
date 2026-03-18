import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import "./home.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //Get user from localStorage 
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user || "Guest");
  }, []);

  const handleLogout = () => {
    //  Clear all data
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("_id");

    handleSuccess("User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header className="header">
      <div className="logo"  onClick={() => navigate("/home")}>
        <span className="brand" >
          <i className="fa-solid fa-infinity"></i> SkillSwap
        </span>
      </div>
      <div className="homenav" onClick={() => navigate("/home")}>
       <h6> Home</h6>
    
      </div>
      <div
  className="homenav"
  onClick={() =>
    navigate("/home", { state: { scrollTo: "matches" } })
  }
>
  <h6>Explore</h6>
</div>

      <div className="header-right">
        <button onClick={handleLogout}>Logout</button>

        <div
          className="profile-icon"
          onClick={() => navigate("/profile")}
        >
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <ToastContainer />
    </header>
  );
};

export default Header;