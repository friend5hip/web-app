import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("Login Success");
      console.log(action.payload);
      // state.email = action.payload.email;
      // return { email: action.payload.email };
      setCookie("member", JSON.stringify(action.payload), 1);
      return action.payload;
    },
    logout: () => {
      console.log("Logout Success");
      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("login fulfilled.");
        console.log(action.payload);

        const payload = action.payload;
        if (!payload.eror) {
          setCookie("member", JSON.stringify(payload), 1);
        }
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("login pending.");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("login rejected.");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
