import ProductCard from "../ProductCard.tsx";


interface ProductGridProps {
  products: {
    product_id: string;
    model?: string;
    image?: string;
    calculated_price?: number;
  }[];
  onProductClick: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-600">No products found.</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} onClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductGrid;
