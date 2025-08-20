import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './style-Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // gives current route

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/Home/LogInPage");
  };

  return (
    <div className="Navbar">
      <div className="nav-left">
        {/* Hide Home button if already on "/" */}
        {location.pathname !== "/" && (
          <div className="HomePageBtn">
            <Link to="/"> 
              <img src="/HomeIcon.png" alt="Home" />
            </Link>
          </div>
        )}
      </div>

      <div className="nav-right">
        {isLoggedIn ? (
          <>
            <button 
              className="logout-btn" 
              style={{ color: "white" }} 
              onClick={handleLogout}
            >
              <img src="/LogoutIcon.png" alt="Logout" />
            </button>
          </>
        ) : (
          <>
            {/* Hide SignUp button if on SignUp page */}
            {location.pathname !== "/Home/SignUpPage" && (
              <Link to="/Home/SignUpPage">Sign Up</Link>
            )}
            {/* Hide LogIn button if on LogIn page */}
            {location.pathname !== "/Home/LogInPage" && (
              <Link to="/Home/LogInPage">Log In</Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
