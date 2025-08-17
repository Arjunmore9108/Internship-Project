import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import PCPeripherals from './Pages/PCPeripherals';
import PCComponents from './Pages/PCComponents';
import Processors from './Pages/Processors';
import Motherboards from './Pages/Motherboards';
import RAMS from './Pages/RAMS';
import PowerSupplies from './Pages/PowerSupplies';
import GraphicsCards from './Pages/GraphicsCards';
import FansAndCoolings from './Pages/FansAndCoolings';
import Storages from './Pages/Storages';
import CartPage from './Pages/CartPage';
import PCCabinetsAndChasis from './Pages/PCCabinetsAndChasis';
import ProductMainPage from './Pages/ProductMainPage';
import PreBuildPC from './Pages/PreBuildPC';
import InputDevices from './Pages/InputDevices';
import OutputDevices from './Pages/OutputDevices';
import GamingChairs from './Pages/GamingChairs';
import Laptops from './Pages/Laptops';
import Desktops from './Pages/Desktops';
import OrderPage from './Pages/OrderPage';
import OrderPage2 from './Pages/OrderPage2';
import NotFoundPage from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/SignUpPage" element={<SignUpPage />} />
        <Route path="/Home/LogInPage" element={<LogInPage />} />
        <Route path="/Home/PCPeripherals" element={<PCPeripherals />} />
        <Route path="/Home/PCComponents" element={<PCComponents />} />
        <Route path="/Home/PCComponents/Processors" element={<Processors />} />
        <Route path="/Home/PCComponents/RAMS" element={<RAMS />} />
        <Route path="/Home/PCComponents/Motherboards" element={<Motherboards />} />
        <Route path="/Home/PCComponents/PowerSupplies" element={<PowerSupplies />} />
        <Route path="/Home/PCComponents/GraphicsCards" element={<GraphicsCards />} />
        <Route path="/Home/PCComponents/FansAndCoolings" element={<FansAndCoolings />} />
        <Route path="/Home/PCComponents/Storages" element={<Storages />} />
        <Route path="/Home/CartPage" element={<CartPage />} />
        <Route path="/Home/PCComponents/PCCabinetsAndChasis" element={<PCCabinetsAndChasis />} />
        <Route path="/ProductMainPage" element={<ProductMainPage />} />
        <Route path="/ProductMainPage/:id" element={<ProductMainPage />} />
        <Route path="/Home/PreBuildPC" element={<PreBuildPC />} />
        <Route path="/Home/PCPeripherals/InputDevices" element={<InputDevices />} />
        <Route path="/Home/PCPeripherals/OutputDevices" element={<OutputDevices />} />
        <Route path="/Home/PCPeripherals/GamingChairs" element={<GamingChairs />} />
        <Route path="/Home/PreBuildPC/Laptops" element={<Laptops />} />
        <Route path="/Home/PreBuildPC/Desktops" element={<Desktops />} />
        <Route path="/Home/CartPage/Checkout/PersonDetails" element={<OrderPage/>}/>
        <Route path="/Home/CartPage/CheckOut/OrderConfirmed" element={<OrderPage2 />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/NotFoundPage" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
