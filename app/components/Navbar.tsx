"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import cartIcon from "../../public/cart.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-circle" />
          <span className="fw-bold fs-4 fst-italic">Trend Wave</span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          
          <ul className="navbar-nav mx-auto gap-lg-3 gap-2 text-center">
            <li className="nav-item"><Link href="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link href="/products" className="nav-link text-white">Products</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link text-white">About Us</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link text-white">Contact</Link></li>
          </ul>

          {/* Search + Cart */}
          <div className="d-flex align-items-center gap-3">

            <div className="input-group" style={{ maxWidth: "230px" }}>
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-warning fw-bold">Go</button>
            </div>

            {/* Cart Icon with Count */}
            <Link href="/cart" className="position-relative">
              <Image src={cartIcon} alt="cart" width={40} height={40} />
              {cart.length > 0 && (
                <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle">
                  {cart.length}
                </span>
              )}
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
