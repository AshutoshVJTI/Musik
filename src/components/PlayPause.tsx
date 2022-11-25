import { PlayPauseProps } from "../types/@types";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = (props: PlayPauseProps) => {
  const { isPlaying, activeSong, song, handlePause, handlePlay } = props;
  if (isPlaying && activeSong?.title === song.title)
    return (
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    );
  else
    return (
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
    );
};

export default PlayPause;
