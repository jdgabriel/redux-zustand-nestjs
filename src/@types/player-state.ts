import { Course } from "./course";

export interface PlayerState {
  course: Course | null;
  isLoading: boolean;
  currentModuleOpenedIndex: number;
  currentModuleIndex: number;
  currentLessonIndex: number;
}
