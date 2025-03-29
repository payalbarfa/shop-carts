import { createSlice, Dispatch } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// Create slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { setProducts, setSelectedProduct, setLoading, setError } = productSlice.actions;

// Export reducer
export default productSlice.reducer;

// Async function to fetch products
// export const fetchProducts = (categoryId:any) => async (dispatch:any) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await fetch(`https://fatherstock-cache.b-cdn.net/category/${categoryId}.json`);
//     if (!res.ok) throw new Error("Failed to fetch products");
//     const data = await res.json();
//     console.log("API Response:", data); // Log the full API response
//     dispatch(setProducts(data));
//   } catch (error:any) {
//     dispatch(setError(error.message));
//   }
//   dispatch(setLoading(false));
// };
export const fetchProducts = (categoryId: string | number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(`https://fatherstock-cache.b-cdn.net/category/${categoryId}.json`);
    if (!res.ok) throw new Error("Failed to fetch products");

    let data;
    try {
      data = await res.json();
    } catch (jsonError) {
      throw new Error("Something went wrong");
    }

    console.log("API Response:", data);

    if (!data?.data?.products || !Array.isArray(data.data.products)) {
      throw new Error("Invalid data format: 'products' array missing");
    }

    dispatch(setProducts(data.data.products)); // ✅ Extract `products` array
  } catch (error: unknown) {
    console.error("Fetch Products Error:", error instanceof Error ? error.message : "Something went wrong");
    dispatch(setError(error instanceof Error ? error.message : "Something went wrong"));
  } finally {
    dispatch(setLoading(false));
  }
};
// Async function to fetch product details
// export const fetchProductDetails = (productId:any) => async (dispatch:any) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await fetch(`https://fatherstock-cache.b-cdn.net/cache/${productId}-f1.json`);
//     if (!res.ok) throw new Error("Product not found");
//     const data = await res.json();
//     dispatch(setSelectedProduct(data));
//   } catch (error:any) {
//     dispatch(setError(error.message));
//   }
//   dispatch(setLoading(false));
// };

export const fetchProductDetails = (productId: string | number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(`https://fatherstock-cache.b-cdn.net/cache/${productId}-f1.json`);
    if (!res.ok) throw new Error("Product details not found");

    let data;
    try {
      data = await res.json();
    } catch (jsonError) {
      throw new Error("Invalid JSON response from server");
    }

    console.log("Product Details API Response:", data);

    if (!data || typeof data !== "object") {
      throw new Error("Invalid product data format");
    }

    dispatch(setSelectedProduct(data));
  } catch (error: unknown) {
    console.error("Fetch Product Details Error:", error instanceof Error ? error.message : "Something went wrong");
    dispatch(setError(error instanceof Error ? error.message : "Something went wrong"));
  } finally {
    dispatch(setLoading(false));
  }
};

  