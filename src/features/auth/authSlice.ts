import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSimplifiedError } from "../../util";
import { APIService } from "../../util/APIService";
import { url } from "../../util/endpoints";
export interface AuthState {
  loading: boolean;
  userData: any;
  token: any;
  verifiedStatus: boolean;
}

const initialState: AuthState = {
  loading: false,
  userData: {},
  token: {},
  verifiedStatus: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload;
        state.token = payload.tokens;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(socialRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(socialRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload;
        state.token = payload.tokens;
      })
      .addCase(socialRegister.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload.user;
        state.token = payload.tokens;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(socialLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(socialLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload.user;
        state.token = payload.tokens;
      })
      .addCase(socialLogin.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = {};
        state.userData = {};
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(verifyUserEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUserEmail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.verifiedStatus = true;
      })
      .addCase(verifyUserEmail.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.register}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const socialRegister = createAsyncThunk(
  "socialRegister",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.socialRegister}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.login}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const socialLogin = createAsyncThunk(
  "socialLogin",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.socialLogin}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.logout}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const verifyUserEmail = createAsyncThunk(
  "verifyUserEmail",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(
        `${url.verifyUserEmail}?${payload}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const authSelector = (state: any) => state.auth;

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
