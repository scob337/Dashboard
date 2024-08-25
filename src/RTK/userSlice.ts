import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  avatar: string | null | undefined;
  name: string;
}

interface UserState {
  User: User | null;
  Login: boolean;
}

const initialState: UserState = {
  User: {
    username: "",
    email: "",
    avatar: null,
    name: "",
  },
  Login: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.User = action.payload;
      state.Login = true;
    },
    clearUser(state) {
      state.User = null;
      state.Login = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
