import { configureStore } from "@reduxjs/toolkit";
import mnemonicsReducer from "./mnemonics";
import tonwebReducer from "./tonweb";
import channelReducer from "./channel";

export default configureStore({
  reducer: {
    channel: channelReducer,
    mnemonics: mnemonicsReducer,
    tonweb: tonwebReducer,
  },
});
