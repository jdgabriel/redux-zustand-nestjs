import { PlayerState } from "@/@types/player-state";
import { api } from "@/lib/axios";
import { create } from "zustand";

interface PlayerStore extends PlayerState {
  start: () => Promise<void>;
  play: (currentIndex: Array<number>) => void;
  next: () => void;
  openModule: (nextModuleIndex: string) => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  course: null,
  isLoading: false,
  currentModuleOpenedIndex: 0,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  start: async () => {
    const course = await api.get("/course");
    if (course.status === 200) {
      set({ course: course.data });
    }
  },
  play: (currentIndex: Array<number>) => {
    set({
      currentModuleOpenedIndex: currentIndex[0],
      currentModuleIndex: currentIndex[0],
      currentLessonIndex: currentIndex[1],
    });
  },
  next: () => {
    const { course, currentModuleIndex, currentLessonIndex } = get();
    const nextLessonIndex = currentLessonIndex + 1;
    const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex];
    if (nextLesson) {
      set({ currentLessonIndex: nextLessonIndex });
    } else {
      const nextModuleIndex = currentModuleIndex + 1;
      const nextModule = course?.modules[nextModuleIndex];
      if (nextModule) {
        set({
          currentModuleOpenedIndex: nextModuleIndex,
          currentModuleIndex: nextModuleIndex,
          currentLessonIndex: 0,
        });
      }
    }
  },
  openModule: (nextModuleIndex: string) => {
    set({ currentModuleOpenedIndex: +nextModuleIndex });
  },
}));
