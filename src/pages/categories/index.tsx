"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchCategories } from "../store/slices/categorySlice";
import { RootState } from "../store";
import TopBar from "@/components/TopBar";
import { Loader } from "@/components/Loader";
import CategoryGrid from "@/components/CategoryGrid";

const CategoryList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories, loading, error } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const handleCategoryClick = (categoryId: string) => {
    router.push(`categories/${categoryId}`);
  };

  return (
    <>
      <TopBar />
      <div className="max-w-7xl mx-auto my-12 px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Shop by Category</h2>

        {loading && <Loader />} 
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && <CategoryGrid categories={categories} onCategoryClick={handleCategoryClick} />}
      </div>
    </>
  );
};

export default CategoryList;