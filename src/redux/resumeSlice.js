import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  },
  reducers: {
    updateResume: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateResume } = resumeSlice.actions;
export default resumeSlice.reducer;
