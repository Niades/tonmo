import { createSlice } from "@reduxjs/toolkit";
import { range, LocalStorage } from "../util";

const MNEMONICS_LS_KEY = "mnemonics";

let initialMnemonics = range(1, 24).map(() => "");
const lsMnemonics = LocalStorage.getItem(MNEMONICS_LS_KEY);
if (lsMnemonics != null) initialMnemonics = lsMnemonics;

export const mnemonicsSlice = createSlice({
  name: "mnemonics",
  initialState: {
    value: initialMnemonics,
  },
  reducers: {
    setMnemonicWord: (state, action) => {
      const [word, idx] = action.payload;
      state.value[idx] = word;
    },
  },
});

export const { setMnemonicWord } = mnemonicsSlice.actions;

export default mnemonicsSlice.reducer;
