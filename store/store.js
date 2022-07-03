import { configureStore } from "@reduxjs/toolkit";
import mnemonicsReducer from "./mnemonics";
import tonwebReducer from "./tonweb";

export default configureStore({
  reducer: {
    mnemonics: mnemonicsReducer,
    tonweb: tonwebReducer,
  },
});
