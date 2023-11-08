import { usePlayerStore } from "../store";

export const useGetLessons = (moduleIndex: number) => {
  return usePlayerStore((state) => state.course?.modules[moduleIndex].lessons);
};
