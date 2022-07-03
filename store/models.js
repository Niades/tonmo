import { range } from "../util";

export const mnemonics = {
  state: range(1, 24).map(() => ""),
  reducers: {
    setMnemonicWord(state, [word, idx]) {
      return state.splice(idx, 0, word);
    },
  },
};
