import ProductCard from "./ProductCard";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products: ProductItem[] = await res.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {products.map((product: ProductItem) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;