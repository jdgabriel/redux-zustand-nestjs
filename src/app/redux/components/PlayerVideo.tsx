import Player from "react-player";
import { useDispatch } from "react-redux";
import { useCurrentLesson } from "../hooks/useCurrentLesson";
import { next } from "../store/slices/player";

export default function PlayerVideo() {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <Player
          width="100%"
          height="100%"
          controls
          onEnded={() => dispatch(next())}
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        />
      </div>
    </div>
  );
}
