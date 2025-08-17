import React from "react";
import { useCart } from "./CartContext";
import "./CartPage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BestDeals from "../Components/BestDeals";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="cart-empty">
          <h2 style={{color:"red"}}>OOPS!</h2>
          <h2>Your Cart is Empty </h2>
          <p>Add some products to Cart.</p>
          <div className="EmptyCartImgSection">
            <img src="EmptyCartImage.jpg" alt="EmptyCartIamge" />
          </div>
        </div>
        <hr>
        </hr>
        <BestDeals />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        <div className="table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th className="ProductRow1">Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="product-cell">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-img"
                    />
                    <span className="ProductName">{item.name}</span>
                  </td>


                  <td className="PriceColumn">
                    <span className="OldPrice" style={{ textDecoration: "line-through", marginRight: "6px", color: "gray" }}>
                      ₹{item.oldPrice.toLocaleString()}
                    </span>
                    <span className="Price" style={{ fontWeight: "bold", color: "#000" }}>
                      ₹{item.price.toLocaleString()}
                    </span>
                  </td>

                  <td>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        &lt;
                      </button>
                      <span >{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        &gt;
                      </button>
                    </div>
                  </td>


                  <td>
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </td>

                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src="DeleteIcon.svg" className="DeleteIcon" />
                    </button>
                  </td>
                </tr>
              ))}

              <tr className="total-row">
                <td colSpan="3" className="total-label">
                  Total
                </td>
                <td className="total-value">₹{total.toLocaleString()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="checkout-container">
          <Link to="/Home/CartPage/CheckOut/PersonDetails ">
          <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
      <hr>
      </hr>
      <BestDeals />
      <Footer />
    </>
  );
}
