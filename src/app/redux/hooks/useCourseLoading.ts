import { useAppSelector } from "../store";

export const useCourseLoading = () => {
  return useAppSelector((state) => state.player.isLoading);
};
