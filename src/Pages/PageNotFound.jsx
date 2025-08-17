import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oops! No page exists.</h2>
        <p className="notfound-text">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="notfound-suggestion">
          Please check the URL or return to the <a href="/">homepage</a>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
