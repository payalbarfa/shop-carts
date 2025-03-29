import Image from "next/image";

interface CategoryCardProps {
  category: {
    category_id: string;
    name?: string;
    image?: string;
  };
  onClick: (categoryId: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(category.category_id)}
    >
      <Image 
        src={category.image || "/fallback-image.jpg"} 
        alt={category.name || "Category"} 
        width={200} 
        height={200} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-700">{category.name || "Unknown Category"}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
