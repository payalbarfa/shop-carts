
import React from "react";

interface ErrorContainerProps {
  message: string;
}

export const ErrorContainer: React.FC<ErrorContainerProps> = ({ message }) => {
  return (
    <div className="flex w-full items-center justify-center h-[200px]">
      <p className="text-red-500 text-2xl">{message}</p>
    </div>
  );
};
