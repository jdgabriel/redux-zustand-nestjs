import { useAppSelector } from "../store";

export const useCurrentIndexes = () => {
  return useAppSelector((state) => ({
    currentModuleIndex: state.player.currentModuleIndex,
    currentLessonIndex: state.player.currentLessonIndex,
  }));
};
