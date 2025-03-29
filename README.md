
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
   categories/: Contains the category listing page.

   products/: Organizes product-related pages, including product listing and product details, structured by category and product IDs.

   store/: Manages application state using Redux.

   slices/: Includes reducers for category and product states.

   store.ts: Configures the Redux store.

   styles/: Contains global styling for the application.
  
    /components/   
  components/: Contains reusable UI components for category and product display, error handling, loaders, and navigation.

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



