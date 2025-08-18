import react from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import './Style-PCPeripherals.css';
import { Link } from "react-router-dom";
import BottomNav from '../Components/BottomNav';

function PCPeripherals() {
    return (
        <>
            <Header />
            <BottomNav/>
            <div class="heroOfPeripherals">
                <div className="Content">
                    <div className="HeadingText">
                        <p>PC PERIPHERALS</p>
                    </div>
                    <div className="OptionsContainer">
                        <Link to="/Home/PreBuildPC/Laptops" style={{textDecoration:"None"}}>
                        <div className="Options">
                            <img className="Option" src="Laptop.png" />
                            <p>LAPTOPS</p>
                        </div>
                        </Link>
                        <Link to="/Home/PreBuildPC/Desktops" style={{textDecoration:"None"}}>
                        <div className="Options">
                            <img className="Option" src="Desktop.png" />
                            <p>DESKTOPS</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default PCPeripherals;