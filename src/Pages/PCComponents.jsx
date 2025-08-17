import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import './Style-PCComponents.css'
import BottomNav from '../Components/BottomNav';

function PCComponents() {
    return (
        <>
            <Header/>
            <BottomNav/>
            <div className="heroOfComponents">
        <div className="Content">
            <div className="HeadingText">
                <p>PC Components</p>
            </div>
            <div className="OptionsContainer">
                <div className="Options">
                    <Link to="/Home/PCComponents/Processors" style={{textDecoration:"None"}}>
                    <img className="Option" src="CPU.jpg"/>
                    <p>Processor / CPU</p>
                    </Link>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/RAMS" style={{textDecoration:"None"}}>
                    <img className="Option" src="RAM.jpg"/>
                    <p>RAM / Memory</p>
                    </Link>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/GraphicsCards" style={{textDecoration:"None"}}>
                    <img className="Option" src="GPU.jpg"/>
                    <p>Graphics Card / GPU</p>
                    </Link>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/Motherboards" style={{textDecoration:"None"}}>
                    <img className="Option" src="Motherboard.jpg"/>
                    <p>Motherboard</p>
                    </Link>
                </div>
                <div class="Options">
                    <Link to="/Home/PCComponents/PCCabinetsAndChasis" style={{textDecoration:"None"}}>
                    <img className="Option" src="Chasis.jpg"/>
                    <p>PC Cabinet & Chasis</p>
                    </Link>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/PowerSupplies" style={{textDecoration:"None"}}>
                    <img className="Option" src="PowerSupply.jpg"/>
                    <p>Power supply units</p>
                    </Link>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/FansAndCoolings" style={{textDecoration:"None"}}>
                    <img className="Option" src="FAN.jpg"/>
                    </Link>
                    <p>Fan & Coolings</p>
                </div>
                <div className="Options">
                    <Link to="/Home/PCComponents/Storages" style={{textDecoration:"None"}}>
                    <img className="Option" src="Storage.jpg"/>
                    <p>Storage</p>
                    </Link>
                </div>
            </div>

        </div>
    </div>

            <Footer/>
        </>
    )
}

export default PCComponents;