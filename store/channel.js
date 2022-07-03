import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    value: {
      id: null,
    },
  },
  reducers: {
    createChannel: (state) => {
      state.value.id = nanoid();
    },
    setChannelId: (state, action) => {
      state.value.id = action.payload;
    }
  },
});

export const { createChannel, setChannelId } = channelSlice.actions;

export default channelSlice.reducer;
