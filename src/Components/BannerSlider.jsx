import React, { useState } from 'react';
import './BannerSlider.css'; 
import { Link } from 'react-router-dom';
import products from '../data/AllProducts';
const BannerSlider = () => {
  const images = [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
    'banner4.jpg',
    'banner5.jpg',
    'banner6.jpg',
  ];

  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const slideRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div
      className="firstcontainer"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >
      <div className="bottomnavbar">
        <div className="logo">
          <img className="company-logo" src="CompanyLogo.png" alt="Logo Icon" />
        </div>

        <nav className="nav-links">
          <div className='PCComponents'><Link to="/Home/PCComponents">PC COMPONENTS</Link></div>
          <div className='PCPeripherals'><Link to="/Home/PCPeripherals">PC PERIPHERALS</Link></div>
          <div className='PreBuildPC'><Link to="/Home/PreBuildPC">PRE-BUILD PC</Link></div>
        </nav>

        <div className="search-cart" style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search for products"
            className="search-box"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
          {searchTerm && filteredProducts.length > 0 && (
  <ul className="search-suggestions" style={{
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#ffffff',
    border: '1px solid #ccc',
    zIndex: 0,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '350px',
    width:'300px',
    overflowY: 'auto',
    borderRadius:'3px'
  }}>
    {filteredProducts.map((product, idx) => (
  <React.Fragment key={product.link}>
    <li style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100px', height: '100px', borderRadius: '4px' }}
        />
      )}
      <Link to={product.link} style={{ textDecoration: "none", color: "black" }} onClick={() => setSearchTerm('')}>
        {product.name}
        {product.description}
      </Link>
    </li>
    {idx < filteredProducts.length - 1 && <hr style={{ margin: 0 }} />}
  </React.Fragment>
))}
  </ul>
)}
          <Link to="/Home/CartPage">
            <div className="cart-icon">
              <img className="cart-link" src="cartIcon.png" alt="Cart Icon" />
            </div>
          </Link>
        </div>
      </div>
      <button className="slide-btn prev" onClick={slideLeft}>❮</button>
      <button className="slide-btn next" onClick={slideRight}>❯</button>
    </div>
  );
};

export default BannerSlider;
