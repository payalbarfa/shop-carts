"use client";

import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import { fetchProducts } from "../../store/slices/productSlice";
import { RootState, TypedDispatch } from "../../store";
import { ErrorContainer } from "@/components/ErrorContainer";
import { Loader } from "@/components/Loader";
import TopBar from "@/components/TopBar"; // ✅ Added TopBar
import ProductGrid from "@/components/ProductGrid.tsx";

const ProductList = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const params = useParams();
  const router = useRouter();
  const categoryId = params?.categoryId as string;

  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProducts(categoryId));
    }
  }, [categoryId, dispatch]); // ✅ Ensuring fetchProducts remains stable

  const handleProductClick = useCallback(
    (productId: string) => {
      router.push(`/categories/${categoryId}/product/${productId}`);
    },
    [router, categoryId]
  );

  if (loading) return <Loader />; // ✅ Displays loader when fetching
  if (error) return <ErrorContainer message={error} />; // ✅ Displays error message

  return (
    <>
      <TopBar /> {/* ✅ TopBar added here */}
      <div className="max-w-5xl mx-auto px-4 my-8 py-8">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gray-100 text-gray-900 py-4 rounded-lg shadow-md">
          Products
        </h2>
        <ProductGrid products={products} onProductClick={handleProductClick} />
      </div>
    </>
  );
};

export default ProductList;
