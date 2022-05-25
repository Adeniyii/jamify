import { User } from "@prisma/client";
import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data as User,
    isError: error,
    isLoading: !data && !error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    data,
    isError: error,
    isLoading: !data && !error,
  };
};
