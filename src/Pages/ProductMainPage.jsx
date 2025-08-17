import { useParams } from "react-router-dom";
import products from "../data/AllProducts";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./ProductMainPage.css";
import { useCart } from "./CartContext";
import BottomNav from '../Components/BottomNav';
import { useState } from "react"; 

function formatKey(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
}

function ProductMainPage() {
  const { addToCart } = useCart(); 
  const [added, setAdded] = useState(false); 

  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  const handleAddToCart = () => { 
    addToCart(product);
    setAdded(true); 
    setTimeout(() => setAdded(false), 1000); 
  };

  if (!product) {
    return (
      <>
        <Header/>
        <BottomNav/>
        <div className="mainDiv">
          <div className="Warning">
            <div className="WarnHead">
              <p>Product Not Found</p>
            </div>
            <div className="WarnBody">
              <p className="Warn">
                The product you are looking for does not exist or has been removed.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const {
    name,
    price,
    oldPrice,
    image,
    specifications = {},
    features = {},
    warranty,
  } = product;

  const discountPercent = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;
    
  return (
    <>
      <Header />
      <BottomNav/>
      <div className="hero">
        <div className="InnerHeroOfMainPage">
              <div className="PictureSection">
          <div className="PicturesLocation">
            <img src={image} alt={name} />
          </div>
        </div>
        </div>
        <div className="InnerHeroofMainPage2">
          <div className="InformationSection">
          <div className="HeaderSectionOfProduct">
            <h1>{name}</h1>
          </div>
          <hr />
          <div className="PriceSection">
            {oldPrice && (
              <div className="DiscountSection">
                <p className="Percentage">-{discountPercent}% </p>
                <p className="Discount">Discount</p>
              </div>
            )}
            <p className="CurrentPrice">{price} ₹</p>
            {oldPrice && <p className="OldPrice">{oldPrice} ₹</p>}
          </div>
          <hr />
          <div className="SpecificationSection">
            <h2>Specifications</h2>
            <ul>
              {Object.entries(specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{formatKey(key)}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="FeatureSection">
            <h2>Features</h2>
            <ul>
              {Object.values(features).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="WarrantySection">
            <h2>Warranty</h2>
            <p>{warranty}</p>
          </div>
        </div>

        <div className="BuyInformationSection">
          <div className="ShoppingInfo">
            <p style={{ color: "green" }}>Delivery charges Free</p>
            <p>Total price: {price} + 18% GST</p>
            <div className="QtySection">
              <input type="number" defaultValue={1} min={1} max="10" />
            </div>
            <div className="BtnSection">
              <button
                className={`AddToCart ${added ? "added" : ""}`}
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductMainPage;
