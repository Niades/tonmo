import { createSlice } from "@reduxjs/toolkit";
import TonWeb from "../services/TonWebPayments";

export const tonwebSlice = createSlice({
  name: "tonweb",
  initialState: {
    value: TonWeb,
  },
  reducers: {
    addWallet: (state, action) => {
      console.log("reducer called");
      const [mnemonics] = action.payload;
      state.value.addWallet(mnemonics);
    },
  },
});

export const { addWallet } = tonwebSlice.actions;

export default tonwebSlice.reducer;
