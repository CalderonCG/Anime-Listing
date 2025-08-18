import { useEffect, useState } from "react";

export type Anime = {
  id: number;
  name: string;
  release_date: number;
  genre: string[];
  type: "Series" | "Movie";
  bookmarked: boolean;
  image: string;
};

type Category = "Home" | "Series" | "Movies" | "Favorites";

const getAnimes = async (): Promise<Anime[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("/data.json");

  return res.json();
};

export const useAnimes = (category: Category) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimes();

        let filteredList: Anime[];

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