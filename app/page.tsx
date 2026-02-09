// "use client";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../public/banner 1.png"
import banner2 from "../public/banner 2.png"
import banner3 from "../public/banner 3.png"

const products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 1199,
        img: "/smartwatch.webp"
    },
    {
        id: 2,
        name: "Headphones",
        price: 999,
        img: "/headphones.webp"
    },
    {
        id: 3,
        name: "Snekers",
        price: 1999,
        img: "/snekers.webp"
    },
    {
        id: 4,
        name: "Hand Bag",
        price: 1499,
        img: "/handbag.webp"
    },
];


export default function Carousel() {
    return (
        <>
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000">
                        <Image
                            src={banner1}
                            className="d-block w-100"
                            alt="Slide 1"
                            height={550}
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <Image
                            src={banner2}
                            className="d-block w-100"
                            alt="Slide 2"
                            height={550}
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <Image
                            src={banner3}
                            className="d-block w-100"
                            alt="Slide 3"
                            height={550}
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <br />
            {/* CARDS */}
            <div className="row row-cols-2 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card ">
                        <video
                            className="w-100"
                            src="/card 1.mp4"
                            controls
                            muted
                            autoPlay
                            loop
                            playsInline
                            style={{ objectFit: "cover", height: "350px" }}
                        ></video>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video
                            className="w-100"
                            src="/card 2.mp4"
                            controls
                            muted
                            autoPlay
                            loop
                            playsInline
                            style={{ objectFit: "cover", height: "350px" }}
                        ></video>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <video
                            className="w-100"
                            src="/card 3.mp4"
                            controls
                            muted
                            autoPlay
                            loop
                            playsInline
                            style={{ objectFit: "cover", height: "350px" }}
                        ></video>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video
                            className="w-100"
                            src="/card 4.mp4"
                            controls
                            muted
                            autoPlay
                            loop
                            playsInline
                            style={{ objectFit: "cover", height: "350px" }}
                        ></video>
                    </div>
                </div>
            </div>
            <br />



            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5 heading">✨ Trending Products ✨</h2>

                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {products.map((item) => (
                        <div className="col" key={item.id}>
                            <div className="card product-card text-center" style={{ width: "280px" }}>
                                <Image
                                    src={item.img}
                                    width={300}
                                    height={250}
                                    alt={item.name}
                                    className="card-img-top product-img"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="price">₹ {item.price}</p>

                                    <Link href="/products" className="btn btn-warning">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
