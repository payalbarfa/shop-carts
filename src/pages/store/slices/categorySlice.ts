import { createSlice, Dispatch } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCategories, setLoading, setError } = categorySlice.actions;
export default categorySlice.reducer;


export const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true)); // Show loading state before fetching

  try {
    console.log("Fetching categories...");

    const res = await fetch("https://fatherstock-cache.b-cdn.net/category/hot-category.json");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    let data;
    try {
      data = await res.json();
    } catch (jsonError) {
      throw new Error("Invalid JSON response from server");
    }

    console.log("API Response:", data); // Log the full API response

    if (!data?.response || !Array.isArray(data.response)) {
      console.error("Invalid data format, expected an array inside 'response':", data);
      throw new Error("Invalid data format");
    }

    dispatch(setCategories(data.response)); // ✅ Correctly dispatch action
  } catch (error: unknown) {
    console.error("Fetch Categories Error:", error instanceof Error ? error.message : "Something went wrong");
    dispatch(setError(error instanceof Error ? error.message : "Something went wrong"));
  } finally {
    dispatch(setLoading(false)); // Ensure loading stops even if there's an error
  }
};

  