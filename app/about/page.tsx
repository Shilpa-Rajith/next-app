"use client";
import Image from "next/image";
import { FaHandshake, FaTruck, FaThumbsUp, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div style={{ background: "#f7f9fc" }}>

      {/* ⭐ Stylish Gradient Banner */}
      <div
        style={{
background: "linear-gradient(135deg, #3CB371, #2E8B57, #1E5631)",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
         
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "42px" }}>About Us</h1>
        <p style={{ fontSize: "18px", opacity: "0.9" }}>
          A little story about who we are and why we do what we do.
        </p>
      </div>

      {/* ⭐ Main Content */}
      <div className="container py-5" style={{ maxWidth: "950px" }}>
        <div
          className="shadow rounded-4 p-4"
          style={{ background: "#fff", borderLeft: "5px solid #87f1b1ff" }}
        >
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Welcome to <b>Trend Wave</b>, where shopping meets comfort and trust. 
            We started with a vision to bring high-quality products to everyone at 
            honest prices — and that continues to drive everything we do.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            Today, we are proud to serve thousands of happy customers with 
            fast delivery, secure shopping, and friendly service that listens.
          </p>
        </div>

        {/* ⭐ Values Section */}
        <div className="row text-center mt-5 g-4">
          <div className="col-md-3">
            <FaUsers size={40} color="#0f7efb" />
            <h6 className="fw-bold mt-2">Customer First</h6>
            <p style={{ fontSize: "14px", color: "#555" }}>
              We exist to make your life easier.
            </p>
          </div>

          <div className="col-md-3">
            <FaHandshake size={40} color="#0f7efb" />
            <h6 className="fw-bold mt-2">Trusted Service</h6>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Quality and trust guide every step.
            </p>
          </div>

          <div className="col-md-3">
            <FaTruck size={40} color="#0f7efb" />
            <h6 className="fw-bold mt-2">Fast Delivery</h6>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Fast, safe, and on time.
            </p>
          </div>

          <div className="col-md-3">
            <FaThumbsUp size={40} color="#0f7efb" />
            <h6 className="fw-bold mt-2">Quality Guarantee</h6>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Only products we believe in.
            </p>
          </div>
        </div>

        {/* ⭐ Closing Statement */}
        <div className="text-center mt-5">
          <p className="fw-semibold" style={{ fontSize: "18px" }}>
            ❤️ Thank you for choosing us — we’re happy to have you with us.
          </p>
        </div>
      </div>
    </div>
  );
}
