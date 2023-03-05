import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/interface";

interface IInitalState {
  isLoaded: boolean;
  products: IProduct[];
  error: string;
}

const initialState: IInitalState = {
  isLoaded: false,
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsPedding: (
      state: IInitalState,
      action: PayloadAction<string>
    ) => {
      state.isLoaded = true;
    },
    fetchProductsFulfilled: (
      state: IInitalState,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoaded = false;
      state.products = action.payload;
    },
    fetchProductsRejected: (
      state: IInitalState,
      action: PayloadAction<string>
    ) => {
      state.isLoaded = false;
      state.products = [];
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {fetchProductsPedding, fetchProductsFulfilled, fetchProductsRejected} = productSlice.actions;