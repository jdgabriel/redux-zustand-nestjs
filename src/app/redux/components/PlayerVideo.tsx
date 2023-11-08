import Player from "react-player";
import { useCourseLoading } from "../hooks/useCourseLoading";
import { useCurrentLesson } from "../hooks/useCurrentLesson";
import { useAppDispatch } from "../store";
import { next } from "../store/slices/player";
import Loading from "./Loading";

export default function PlayerVideo() {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();
  const isLoading = useCourseLoading();

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {isLoading ? (
          <Loading description="Carregando video" />
        ) : (
          <Player
            width="100%"
            height="100%"
            controls
            onEnded={() => dispatch(next())}
            playing
            url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          />
        )}
      </div>
    </div>
  );
}
