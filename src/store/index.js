import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/UserSlice";

//After creating store you need to provide it globally just like context
export const store = configureStore({
  reducer: {
    app: userSlice.reducer,
  },
});
