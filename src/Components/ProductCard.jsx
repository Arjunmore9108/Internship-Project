import { Link } from "react-router-dom";
import "./style-ProductCard.css";
import { useCart } from "../Pages/CartContext";
import { useState } from "react";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setClicked(true); 


    setTimeout(() => setClicked(false), 2000);
  };

  const {
    name,
    brand,
    description,
    price,
    oldPrice,
    discountPercent,
    image,
  } = product;

  return (
    <>
      <div className="OuterBox">
        <div className="product-card">
          <Link
            to={`/ProductMainPage/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="ImageDiv">
              <img src={image} alt={name} />
            </div>
            <div className="NameContainer">
              <h3>{name}</h3>
            </div>
            <p className="brand">{brand}</p>
            <div className="DescriptionBox">
              <p className="description">{description}</p>
            </div>
            <p className="price">
              ₹{price.toLocaleString()}
              {oldPrice && (
                <span className="old-price">₹{oldPrice.toLocaleString()}</span>
              )}
            </p>
          </Link>
          <div className="BtnContainer">
            <button
              className={`AddToCartBtn ${clicked ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={clicked}
            >
              {clicked ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
