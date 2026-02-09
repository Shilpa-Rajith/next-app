import ProductCard from "../components/ProductCard";

type ProductType = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products: ProductType[] = await res.json();

  return (
    <div>
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((product: ProductType) => (
          <div key={product.id} className="col-md-3 mb-4">
            <ProductCard {...product} />

          </div>
        ))}
      </div>
    </div>
  );
}
