import { getCachedResults, setCache } from "@/utils/cachedImages";
/**
 * 1. Fetches wallpapers from the Valorant wallpaper API endpoint.
 * 2. The endpoint returns a JSON object, which is destructured into the data variable.
 * 3. The data variable is returned, which is an array of wallpaper objects.
 */
export async function fetchWallpapers(limit) {
  try {
    const cachedResults = getCachedResults("playerCards");
    if (!cachedResults) {
      const res = await fetch("https://valorant-api.com/v1/playercards");
      const data = await res.json();

      if (!data || !data.data) {
        throw new Error("No wallpapers found");
      }

      let images = data.data.map((image, index) => {
        return { ...image, id: index };
      });

      setCache("playerCards", images);

      if (limit && images < limit) return images;
      if (limit) return images.slice(0, limit);
      return images;
    }

    if (limit && cachedResults < limit) return cachedResults;
    if (limit) return cachedResults.slice(0, limit);
    return cachedResults;
  } catch (error) {
    console.error(error);
  }
}
