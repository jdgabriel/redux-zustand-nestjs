import { Course } from "@/@types/course";
import { api } from "@/lib/axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PlayerState {
  course: Course | null;
  isLoading: boolean;
  currentModuleOpenedIndex: number;
  currentModuleIndex: number;
  currentLessonIndex: number;
}

const initialState: PlayerState = {
  course: null,
  isLoading: true,
  currentModuleOpenedIndex: 0,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

export const loadCourses = createAsyncThunk("load", async () => {
  const couses = await api.get("/course");
  return couses.data;
});

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Course>) => {
      state.course = action.payload;
    },
    play: (state, action: PayloadAction<Array<number>>) => {
      state.currentModuleOpenedIndex = action.payload[0];
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex];
      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[nextModuleIndex];
        if (nextModule) {
          state.currentModuleOpenedIndex = nextModuleIndex;
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        }
      }
    },
    openModule: (state, action: PayloadAction<string>) => {
      state.currentModuleOpenedIndex = +action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCourses.fulfilled, (state, action) => {
      state.course = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadCourses.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const player = playerSlice.reducer;
export const { start, play, next, openModule } = playerSlice.actions;
