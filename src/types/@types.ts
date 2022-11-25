import { IconType } from "react-icons/lib";
import { Song } from "./response/worldChart";

export interface Genre {
  title: string;
  value: string;
}

export interface Link {
  name: string;
  to: string;
  icon: IconType;
}

export interface ControlsProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongs: any;
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}

export interface PlayerProps {
  activeSong: any;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (event: any) => void;
  onLoadedData: (event: any) => void;
  repeat: boolean;
}

export interface SeekbarProps {
  value: number;
  min: string;
  max: number;
  onInput: (event: any) => void;
  setSeekTime: React.Dispatch<React.SetStateAction<number>>;
  appTime: number;
}

export interface TrackProps {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: Song;
}

export interface VolumeBarProps {
  value: number;
  min: string;
  max: string;
  onChange: (event: any) => void;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

export interface SongBarProps {
  song: any;
  i: number;
  artistId?: string;
  isPlaying: boolean;
  activeSong: Song;
  handlePauseClick: () => void;
  handlePlayClick: (song: Song, i: number) => void;
}

export interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: Song;
  song: Song;
  handlePause: () => void;
  handlePlay: () => void;
}

export interface LoaderProps {
  title: string;
}

export interface SongCardProps {
  song: Song;
  i: number;
  isPlaying: boolean;
  activeSong: any;
  data: any;
}

export interface DetailsHeaderProps {
  artistId?: string;
  artistData?: any;
  songData?: any;
}

export interface RelatedSongsProps {
  data: Song[];
  artistId?: string;
  isPlaying: boolean;
  activeSong: Song;
  handlePauseClick: () => void;
  handlePlayClick: (song: Song, i: number) => void;
}

export interface ArtistCardProps {
  track: Song;
}
