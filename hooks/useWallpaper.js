import { useQuery } from "@tanstack/react-query";
import { fetchWallpapers } from "../utils/valorantApi";

export default function useWallpapers(limit = 10) {
  return useQuery({
    queryKey: ["wallpapers"],
    queryFn: fetchWallpapers.bind(this, limit),
    config: {
      retry: (failureCount, error) => {
        if (failureCount > 3) return false;
        if (error.message.includes("404")) return false;
        return true;
      },
      onError: (error, variables, context) => {
        console.log("Error fetching wallpapers", error);
      },
      onSettled: (data, error, variables, context) => {
        console.log("Wallpapers fetched");
      },
    },
  });
}
