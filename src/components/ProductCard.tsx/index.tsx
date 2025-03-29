import Image from "next/image";

interface ProductCardProps {
  product: {
    product_id: string;
    model?: string;
    image?: string;
    calculated_price?: number;
  };
  onClick: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product.product_id)}
      className="cursor-pointer border border-gray-300 rounded-lg shadow-md p-3 bg-white hover:shadow-lg transition-shadow"
    >
      <Image
        src={product.image || "/default-image.jpg"}
        alt={product.model || "Product Image"}
        width={300}
        height={180}
        className="rounded-sm object-cover"
        priority
      />
      <p className="mt-2 font-semibold text-gray-900">{product.model || "Unknown Product"}</p>
      <p className="text-gray-700">Price: ${product.calculated_price ?? "N/A"}</p>
    </div>
  );
};

export default ProductCard;
