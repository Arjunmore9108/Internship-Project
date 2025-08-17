import Header from '../Components/Header';
import TopBrands from '../Components/TopBrands';
import Footer from '../Components/Footer';
import BannerSlider from "../Components/BannerSlider";
import products from "../data/TopDealsProducts";
import ProductCard from "../Components/ProductCard";
import BestDeals from '../Components/BestDeals';
import './style-Home.css'

function Home() {

    return (
        <div className="Hero">
            <Header/>
            <BannerSlider />
            <BestDeals/>
            <TopBrands />
            <Footer />
        </div>
    );
}
export default Home;