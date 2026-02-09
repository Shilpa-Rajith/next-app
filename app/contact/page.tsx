"use client";
import Image from "next/image";
import contact from "../../public/contact-us.png"
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTruck, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <div>

      <Image
        src={contact}
        width={1800}
        height={300}
        alt="Contact Banner"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="container py-5">

        <h4 className="fw-bold mb-4">Get Help With Your Orders and Issues</h4>

        <div className="d-flex flex-column gap-4">

          <div className="border p-3 rounded d-flex align-items-center gap-3">
            <FaTruck size={30} />
            <p className="mb-0">
              My Order:{" "}
              <a href="/track-order" className="text-primary fw-semibold">
                Track Your Order
              </a>{" "}
              | Order History
            </p>
          </div>

          <div className="border p-3 rounded d-flex align-items-center gap-3">
            <FaCommentDots size={30} />
            <p className="mb-0">
              Chat With Us:{" "}
              <FaWhatsapp size={20} color="green" className="mx-1" />
              <a href="#" className="text-primary fw-semibold">
                Customer Assistance
              </a>{" "}
              | Payment Status | Refund Status
            </p>
          </div>

          <div className="border p-3 rounded d-flex align-items-center gap-3">
            <FaPhoneAlt size={30} />
            <p className="mb-0">
              Call Us:{" "}
              <a href="tel:+911147366145" className="text-primary fw-semibold">
                +91-1147366145
              </a>
              ,{" "}
              <a href="tel:+917011934541" className="text-primary fw-semibold">
                +917011934541
              </a>
            </p>
          </div>

          <div className="border p-3 rounded d-flex align-items-center gap-3">
            <FaEnvelope size={30} />
            <p className="mb-0">
              Still Have a Query? Email us at{" "}
              <a href="mailto:support@yourmail.com" className="text-primary fw-semibold">
                support@yourmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
