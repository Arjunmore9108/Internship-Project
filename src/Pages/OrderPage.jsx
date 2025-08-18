import React, { useState } from "react";
import { useCart } from "./CartContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css";
import emailjs from "emailjs-com";

export default function CheckoutPage() {
  const { cart, placeOrder } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "India",
    countryCode: "+91",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderTable = `
      <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Image</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${cart
            .map(
              (item) => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">
                <img src="${item.image}" alt="${item.name}" width="60" />
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${item.quantity}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">₹${item.price.toLocaleString()}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">₹${(item.price * item.quantity).toLocaleString()}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: `${formData.countryCode} ${formData.phone}`,
      user_address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.pincode}, ${formData.country}`,
      order_items: orderTable,
      order_total: `₹${subtotal.toLocaleString()}`,
      recipient_email: "arjunmore9108@gmail.com",
    };

    emailjs
      .send(
        "service_wfbl01d",
        "template_cu7z7m9",
        templateParams,
        "FTCYJBxoGheOyMOCk"
      )
      .then(
        (response) => {
          placeOrder();
          navigate("/Home/CartPage/CheckOut/OrderConfirmed");
        },
        (error) => {
          alert("Failed to send email. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="cart-empty-message">
          <h2>Your cart is empty!</h2>
        </div>
        <Footer />
      </>
    );
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 4);

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <Header />
      <div className="checkout-wrapper">
        <div className="checkout-card">
          <h2>Checkout</h2>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <div style={{ display: "flex", gap: "8px" }}>
                <select
                  name="countryCode"
                  required
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ flex: 1 }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your full address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                type="text"
                name="pincode"
                placeholder="Enter your pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
              >
                <option value="India">India</option>
              </select>
            </div>
            <div className="buttonSection">
              <button type="submit" className="checkout-btn">
                Place Order
              </button>
            </div>
          </form>
        </div>

        <div className="divideLine" style={{ borderLeft: "1px solid grey" }}></div>

        <div className="RightSection">
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
                <span>₹0</span>
              </div>
              <div className="grand-total">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="DeliveryDetails">
            <h2>Delivery Details</h2>
            <div className="PaymentMethod">
              <p style={{ margin: "0px", color: "green" }}>Free delivery</p>
              <p style={{ margin: "0px" }}>
                Payment method: Cash On Delivery (C.O.D)
              </p>
              <p style={{ margin: "0px" }}>
                Expected delivery date: {formatDate(futureDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
