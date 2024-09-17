import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  avatar: string | null;
  name: string;
}

interface UserState {
  User: User | null;
  Login: boolean;
}

const storedUser = localStorage.getItem("user");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: UserState = {
  User: parsedUser && parsedUser.User ? parsedUser.User : {
    username: "",
    email: "",
    avatar: null,
    name: "",
  },
  Login: parsedUser && parsedUser.User &&
    parsedUser.User.username !== "" &&
    parsedUser.User.email !== "" &&
    parsedUser.User.name !== ""
    ? true
    : false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.User = action.payload;
      state.Login = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    clearUser(state) {
      state.User = null;
      state.Login = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
