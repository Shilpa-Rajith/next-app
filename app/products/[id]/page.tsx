"use client";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductSkelton from "../../components/ProductSkelton";
import styles from "./page.module.css";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [productId]);

  if (!product) return <ProductSkelton />;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div
          className="col-lg-10 p-5"
          style={{
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div className="row g-5 align-items-center">

            <div className="col-md-5 text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={350}
                height={350}
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="col-md-7">
              <h2 className="fw-bold mb-3">{product.title}</h2>
              <h3 className="text-success fw-bold fs-2 mb-4">₹ {product.price}</h3>

              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#555" }}>
                {product.description}
              </p>

              <div className="mt-4 d-flex gap-3">

                <button
                  className={`${styles.glowBtn} btn btn-lg px-4 fw-bold`}
                  onClick={() => {
                    addToCart(product);
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1400);
                  }}
                >
                  {added ? "✔ Added!" : "🛒 Add to Cart"}
                </button>

                <button className={`${styles.flashBtn} btn btn-lg px-4 fw-bold`}>
                  ⚡ Buy Now
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  );
}
