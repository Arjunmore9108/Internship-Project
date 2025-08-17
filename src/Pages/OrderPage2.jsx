import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./OrderPage.css";

export default function OrderConfirmedPage() {
  const { cart, orderPlaced } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderPlaced) {
      navigate("/NotFoundPage");
    }
  }, [orderPlaced, navigate]);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const futureDate = new Date();
  futureDate.setDate(new Date().getDate() + 4);
  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Header />
      <div className="checkout-wrapper">
        <div className="checkout-card">
          <h3 style={{ color: "green" }}>Your order is confirmed!</h3>
          <h5>Thank you for shopping with us</h5>
          <h5>Your order will reach you on {formatDate(futureDate)}</h5>
          <img src="OrderConfirmed.jpg" alt="Order Confirmed" style={{ width: "100%" }} />
        </div>

        <div className="Divider" style={{ borderLeft: "1px solid grey" }}></div>

        <div className="OrderSummaryCard">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div className="order-summary-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>
                  Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          <div className="order-summary-total">
            <div>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span style={{ color: "green" }}>Free delivery</span>
            </div>
            <div>
              <span>Expected delivery</span>
              <span>{formatDate(futureDate)}</span>
            </div>
            <div className="grand-total">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
