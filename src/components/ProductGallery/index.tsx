import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  images: { image: string }[];
  onImageSelect: (image: string) => void;
}

const ProductGallery = ({ mainImage, images, onImageSelect }: ProductGalleryProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={mainImage || "/default-image.jpg"}
        alt="Product"
        width={450}
        height={450}
        className="rounded-lg shadow-md w-full object-cover"
      />
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images?.map((img, index) => (
          <Image
            key={index}
            src={img.image}
            alt={`Product image ${index + 1}`}
            width={80}
            height={80}
            className="rounded-md cursor-pointer border-2 border-transparent hover:border-gray-500 transition-all"
            onClick={() => onImageSelect(img.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
