import { Playlist } from "@prisma/client";
import { usePlaylist } from "lib/hooks";
import ListItem from "./ListItem";

const PlaylistColumn = () => {
  const { data } = usePlaylist();
  const playlists = data?.playlists ?? [];

  return (
    <div className="overflow-y-auto h-full">
      <ol className="flex flex-col gap-1 h-0 mt-3">
        {playlists &&
          playlists.map((p: Playlist) => {
            return (
              <ListItem
                key={p.id}
                id={p.id}
                href="/playlist/[id]"
                label={p.name}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default PlaylistColumn;
