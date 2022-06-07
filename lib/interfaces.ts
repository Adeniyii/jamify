import { Playlist, Song } from "@prisma/client";

export interface IPlaylist extends Playlist {
  songs: Song[];
}
