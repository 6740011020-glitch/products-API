type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products?limit=10');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      ))}

    </div>
  );
}