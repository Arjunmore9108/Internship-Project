import React from "react";
import { Link } from "react-router-dom";
import './style-Header.css'

const Header = () =>{
    
    return (
        <div className="Navbar">
            <div className="nav-left">
                <div className="HomePageBtn">
                    <Link to="/" > <img src="Prev.png" /><div className="HomeTxt">Home</div></Link>
                </div>
            </div>
            <div className="nav-right">
                <Link to="/Home/SignUpPage">Sign Up</Link>
                <Link to="/Home/LogInPage">Log In</Link>

            </div>
        </div>
            )
}

export default Header;        
    
