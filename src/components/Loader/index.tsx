import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[200px]">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
