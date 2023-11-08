import { usePlayerStore } from "../store";

export const useCurrentIndexes = () => {
  return usePlayerStore((state) => ({
    currentModuleIndex: state.currentModuleIndex,
    currentLessonIndex: state.currentLessonIndex,
  }));
};
