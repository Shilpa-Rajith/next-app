"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="alert alert-warning">Your cart is empty.</p>
      ) : (
        cart.map((item: any) => (
          <div key={item.id} className="card mb-3 p-3 shadow-sm">
            <div className="d-flex align-items-center">
              <Image src={item.image} alt={item.title} width={80} height={80} />
              <div className="ms-3 flex-grow-1">
                <h6>{item.title}</h6>
                <p className="fw-bold">₹{item.price}</p>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h4 className="mt-4">Total: ₹{totalPrice}</h4>
    </div>
  );
}
