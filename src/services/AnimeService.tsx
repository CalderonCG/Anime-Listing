import { useEffect, useState } from "react";

export type AnimeType = {
  id: number;
  name: string;
  release_date: number;
  genre: string[];
  type: "Series" | "Movie";
  bookmarked: boolean;
  image: string;
  episodes: number;
  duration: number;
  synopsis: string;
  rating: number;
};

type Category = "Home" | "Series" | "Movies" | "Favorites";

const getAnimes = async (): Promise<AnimeType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("/data.json");

  return res.json();
};

export const getAnimeById = async (id: number): Promise<AnimeType | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("/data.json");
  const data: AnimeType[] = await res.json();
  const anime = data.find((anime) => anime.id === id); 
  return anime || undefined
};


export const useAnimes = (category: Category) => {
  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimes();

        let filteredList: AnimeType[];

        switch (category) {
          case "Series":
            filteredList = data.filter((a) => a.type === "Series");
            break;
          case "Movies":
            filteredList = data.filter((a) => a.type === "Movie");
            break;
          case "Favorites":
            filteredList = data.filter((a) => a.bookmarked);
            break;
          default:
            filteredList = data;
        }

        setAnimes(filteredList);
      } catch (err) {
        console.error("Error fetching animes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { animes, loading };
};
