import { Playlist, Song } from "@prisma/client";

export interface ISong extends Song {
  artist: { name: string };
}

export interface IPlaylist extends Playlist {
  songs: ISong[];
}
