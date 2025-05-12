import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  email: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        // console.log("action Payload", action)
      state.isAuthenticated = true;
      state.email = action.payload;
    },
    logout: (state) => {
        //  console.log("state", state)
      state.isAuthenticated = false;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
