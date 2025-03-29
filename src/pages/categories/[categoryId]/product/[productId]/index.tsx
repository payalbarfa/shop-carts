"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchProductDetails } from "../../../../store/slices/productSlice";
import { RootState } from "../../../../store";
import { Loader } from "@/components/Loader";
import { ErrorContainer } from "@/components/ErrorContainer";
import TopBar from "@/components/TopBar"; // ✅ Added TopBar
import ProductActions from "@/components/ProductActions";
import ProductInfo from "@/components/ProductInfo";
import ProductGallery from "@/components/ProductGallery";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = (useParams() ?? {}) as { productId?: string };

  const { selectedProduct, loading, error } = useSelector((state: RootState) => state.products);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [productId, dispatch]); // ✅ Added dispatch to dependencies

  useEffect(() => {
    if (selectedProduct?.image) {
      setMainImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  if (loading) return <Loader />;
  if (error) return <ErrorContainer message={error} />;
  if (!selectedProduct) return <p className="text-center text-lg text-gray-200">No product found.</p>;

  return (
    <>
    <TopBar />
    <div className="max-w-6xl mx-auto mt-16 px-6 py-10 bg-gray-900 text-white rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <ProductGallery
          mainImage={mainImage}
          images={selectedProduct.images || []}
          onImageSelect={setMainImage}
        />
        <div>
          <ProductInfo
            name={selectedProduct.name}
            price={selectedProduct.calculated_price}
            basePrice={selectedProduct.base_price}
            stock={selectedProduct.quantity}
            description={selectedProduct.descriptions?.[1]?.meta_description}
          />
          <ProductActions />
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductDetails;
