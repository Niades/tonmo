import create from "zustand";
import { range } from "../util";

const useStore = create((set) => ({
  mnemonics: range(1, 24).map(() => ''),
  setMnemonics: (m) => set(() => ({ mnemonics: m })),
  //increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));

export default useStore;