import { Playlist } from "@prisma/client";
import { RiPlayList2Line } from "react-icons/ri";
import { usePlaylist } from "../../lib/hooks";
import ListItem from "./ListItem";

const PlaylistColumn = () => {
  const { data } = usePlaylist();
  const playlists = data?.playlists ?? [];

  return (
    <ol className="flex flex-col gap-3 h-2">
      {playlists &&
        playlists.map((p: Playlist) => {
          return (
            <ListItem
              key={p.id}
              id={p.id}
              href="/playlist/[id]"
              label={p.name}
              Icon={RiPlayList2Line}
              iconStyle="stroke-green-400"
            />
          );
        })}
    </ol>
  );
};

export default PlaylistColumn;
