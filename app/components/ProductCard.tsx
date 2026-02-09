"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";  // 👈 important

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: Product) {
  const { addToCart } = useCart(); // 👈 now connected
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image }); // send product data
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={image} className="card-img" style={{ height: "200px", objectFit: "contain" }} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="fw-bold">₹ {price}</p>

        <div className="d-flex gap-2 mt-3">
          <Link
            href={`/products/${id}`}
            className="btn w-50 rounded-pill fw-bold"
            style={{
              background: "linear-gradient(135deg, #4e73df, #1cc88a)",
              color: "white",
              transition: "0.3s",
            }}
          >
            👀 View
          </Link>

          <button
            onClick={handleAddToCart}
            className="btn w-50 rounded-pill fw-bold"
            style={{
              background: added
                ? "linear-gradient(135deg, #1cc88a, #17a673)"
                : "linear-gradient(135deg, #ff7eb3, #ff758c)",
              color: "white",
              transition: "0.3s",
            }}
          >
            {added ? "✔ Added" : "🛒 Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
