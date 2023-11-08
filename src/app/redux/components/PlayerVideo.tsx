import Player from "react-player";

export default function PlayerVideo() {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <Player
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=OZuW6BH_Vak"
        />
      </div>
    </div>
  );
}
