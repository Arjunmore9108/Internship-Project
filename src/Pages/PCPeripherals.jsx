import react from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import './Style-PCPeripherals.css';
import {Link} from "react-router-dom";
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
                        <Link to="/Home/PCPeripherals/InputDevices" style={{textDecoration:"None"}}>
                        <div className="Options">
                            <img className="Option" src="InputDevices.jpg" />
                            <p>Input Devices</p>
                        </div>
                        </Link>
                        <Link to="/Home/PCPeripherals/OutputDevices" style={{textDecoration:"None"}}>
                        <div className="Options">
                            <img className="Option" src="OutputDevices.jpg" />
                            <p>Output Devices</p>
                        </div>
                        </Link>
                        <Link to="/Home/PCPeripherals/GamingChairs" style={{textDecoration:"None"}}>
                        <div className="Options">
                            <img className="Option" src="GamingChair.jpg" />
                            <p>Gaming Chair</p>
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