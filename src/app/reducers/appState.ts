import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateInterface {
  products: {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: {
      customer: string;
      review: string;
      score: number;
    }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: {
      weekEnding: string;
      retailSales: number;
      wholesaleSales: number;
      unitsSold: number;
      retailerMargin: number;
    }[];
  }[];
}

const initialState: StateInterface = {
  products: [],
};

const appState = createSlice({
  name: 'appState',
  initialState: initialState,
  reducers: {
    updateProducts(state, action: PayloadAction<StateInterface>) {
      state.products = action.payload.products;
    },
  },
});

export interface AppState {
  appState: StateInterface;
}

// eslint-disable-next-line
export const { updateProducts } = appState.actions;

export default appState.reducer;
