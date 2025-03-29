interface ProductInfoProps {
    name: string;
    price: number;
    basePrice: number;
    stock: number;
    description: string;
  }
  
  const ProductInfo = ({ name, price, basePrice, stock, description }: ProductInfoProps) => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-100 mb-6">{name}</h1>
        <p className="text-2xl font-semibold">
          Price: <span className="text-green-500">SAR {price}</span>
        </p>
        <p className="mt-2 text-gray-200">
          Base Price: <span className="text-green-500">SAR {basePrice}</span>
        </p>
        <p className="text-gray-200">
          Stock Available: <span className="text-green-500">{stock}</span>
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-100">Description:</h2>
          <p className="text-gray-400 mt-2 text-base">{description || "No description available."}</p>
        </div>
      </div>
    );
  };
  
  export default ProductInfo;
  