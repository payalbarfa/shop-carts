import CategoryCard from "../CategoryCard";

interface CategoryGridProps {
  categories: { category_id: string; name?: string; image?: string }[];
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.category_id} category={category} onClick={onCategoryClick} />
      ))}
    </div>
  );
};

export default CategoryGrid;
