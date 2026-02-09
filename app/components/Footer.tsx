import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-2 mt-2">
      <div className="container text-center">

        <h5 className="fw-bold">🛍️ My Store</h5>
        <p className="text-muted mb-2">
          Quality products | Fast delivery | Best support
        </p>

        <div className="mb-3">
          <a href="#" className="text-light mx-2">📘</a>
          <a href="#" className="text-light mx-2">📸</a>
          <a href="#" className="text-light mx-2">🐦</a>
          <a href="#" className="text-light mx-2">▶️</a>
        </div>

        <small className="text-secondary">
          © {new Date().getFullYear()} My Store — All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
