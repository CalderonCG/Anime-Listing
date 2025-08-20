import { useEffect, useState } from "react";

// Types --------------------------------------------
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


// Functions -------------------------------------------------

//Fetch all animes
const getAnimes = async (): Promise<AnimeType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //Fake delay for loader to appear
  const res = await fetch("/data.json"); //Fetches the json
  return res.json();
};

//Fetch anime by id
export const getAnimeById = async (id: number): Promise<AnimeType | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("/data.json");

  const data: AnimeType[] = await res.json();  //Gets all the animes
  
  const anime = data.find((anime) => anime.id === id); //Then filters the one it needs
  return anime || undefined //Returns undefines if anime doesnt exist
};

//Custom hook to consume json, handles all the loading and try catch
export const useAnimes = (category: Category) => {
  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getAnimes();

        let filteredList: AnimeType[];

        switch (category) { //Filters the animes depending if its a series or a movie
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

  //I tried to patch the local json, but as expected it doesnt quite work, it resets after each render
    const patchAnime = (id: number) => {
    setAnimes((prev) =>
      prev.map((anime) =>
        anime.id === id ? { ...anime, bookmarked: !anime.bookmarked } : anime
      )
    );
  };

  return { animes, loading,patchAnime };
};
