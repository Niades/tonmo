import { configureStore } from '@reduxjs/toolkit'
import mnemonicsReducer from "./mnemonics";

export default configureStore({
  reducer: {
    mnemonics: mnemonicsReducer,
  },
});