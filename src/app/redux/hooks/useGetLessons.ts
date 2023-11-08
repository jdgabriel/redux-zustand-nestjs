import { useAppSelector } from "../store";

export const useGetLessons = (moduleIndex: number) => {
  return useAppSelector((state) => state.player.course?.modules[moduleIndex].lessons);
};
