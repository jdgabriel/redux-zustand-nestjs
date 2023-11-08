import { usePlayerStore } from "../store";

export const useCourseLoading = () => {
  return usePlayerStore((state) => state.isLoading);
};
