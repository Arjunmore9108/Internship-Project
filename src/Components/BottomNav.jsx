import { Link, useNavigate, useLocation } from "react-router-dom";
import './BottomNav.css';

function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnPCComponents = location.pathname.startsWith("/Home/PCComponents");
    const isOnPCPeripherals = location.pathname.startsWith("/Home/PCPeripherals");
    const isOnPreBuildPC = location.pathname.startsWith("/Home/PreBuildPC");

    return (
        <>
            <div className="BottomNavBarSection">
                <div className="PrevBtn">
                    <button onClick={() => navigate(-1)}> 
                        <img src="Prev.png" alt="PrevBtn"/>
                    </button>
                </div>

                <nav className="BottomNavBar">
                    {!isOnPCComponents && (
                        <div className="PCComponentsBtn">
                            <Link to="/Home/PCComponents">
                                <button>PC COMPONENTS</button>
                            </Link>
                        </div>
                    )}

                    {!isOnPCPeripherals && (
                        <div className="PCPeripheralsBtn">
                            <Link to="/Home/PCPeripherals">
                                <button>PC PERIPHERALS</button>
                            </Link>
                        </div>
                    )}

                    {!isOnPreBuildPC && (
                        <div className="PreBuildPCBtn">
                            <Link to="/Home/PreBuildPC">
                                <button>PRE-BUILD PC</button>
                            </Link>
                        </div>
                    )}

                    <div className="cartIcon">
                        <Link to="/Home/CartPage">
                            <img src="CartIcon.png" alt="Cart"/>
                        </Link>
                    </div>
                </nav>

                <div className="NextBtn">
                    <button onClick={() => navigate(1)}>
                        <img src="Next.png" alt="NextBtn"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BottomNav;
