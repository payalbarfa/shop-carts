
## Overview

This is an e-commerce platform built with Next.js, Redux Toolkit, and Tailwind CSS. It allows users to browse product categories, view products, and see product details.

## Features

 -  Category Listing: Fetches and displays product categories from an API.

 -  Product Listing: Fetches and displays products based on selected categories.

 -  Product Details: Fetches and displays detailed product information.

 -  State Management: Utilizes Redux Toolkit for global state management.

 -  Dynamic Routing: Implements nested dynamic routing using Next.js App Router.

 -  Styled UI: Styled using Tailwind CSS.

 ## Folder Structure
      /pages/
|____ categories/
|      |____ index.tsx        # Category listing page
|____ products/
|      |____ [categoryId]/
|      |      |____ index.tsx  # Product listing page
|      |      |____ [productId]/
|      |      |      |____ index.tsx  # Product details page
|____ store/
|      |____ slices/
|      |      |____ categorySlice.ts  # Category state slice
|      |      |____ productSlice.ts   # Product state slice
|      |____ store.ts                 # Redux store configuration
|____ styles/
|      |____ globals.css  # Global Tailwind styles

## Technologies Used

 - Next.js: React framework for server-side rendering.

 - Redux Toolkit: State management.

 - Tailwind CSS: Styling.

 - TypeScript: Type safety.

 ## Installation

 - Prerequisites

 - Node.js (v16+ recommended)

 - npm or yarn
  
## Steps
   1. Clone the repository: 
     git clone https://github.com/your-repo.git
     cd your-project

   2. Install dependencies:
      npm install
      # or
     yarn install

  3. Run the development server:
     npm run dev
     # or
     yarn dev

  4. Open http://localhost:3000 to view it in the browser.

 ## Routing  
  
  his project follows Next.js's App Router structure:

 - /categories → Lists all categories.

 - /products/[categoryId] → Lists products within a category.

 - /products/[categoryId]/[productId] → Shows product details.

 ## Deployment
     To build for production:
     npm run build
     npm start



