import Image from "next/image";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductProps {
  product: ProductItem;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300 hover:-translate-y-1">

      <div className="w-[120px] h-[120px] flex items-center justify-center">
        <Image
          src={product.image}
          alt="product"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <h2 className="text-sm font-semibold mt-3 line-clamp-2 h-[40px]">
        {product.title}
      </h2>

      <p className="text-purple-600 font-bold mt-2 text-lg">
        ${product.price}
      </p>

      <button className="mt-3 bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;