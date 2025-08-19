import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Animes.scss";
import Filters from "../../components/Filters/Filters";
import FilterCard from "../../components/FilterCard/FilterCard";

type AnimeProps = {
  title: string;
  category: "Home" | "Series" | "Movies" | "Favorites";
};

function Animes({ title, category }: AnimeProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const genres = [
    "Action",
    "Adventure",
    "Shounen",
    "Comedy",
    "Suspense",
    "Mystery",
    "Psychological",
    "Romance",
    "Fantasy",
    "Drama",
    "Dark Fantasy",
    "Martial Arts",
    "Family",
    "Supernatural",
    "Space",
    "School",
    "Mecha",
    "Horror",
    "Sci-fi",
    "Thriller",
    "Slice of Life",
  ];
  const { animes, loading } = useAnimes(category);
  const [search, setSearch] = useState("");

  const handleSelected = (selectedGenre: string) => {
    if (selected.includes(selectedGenre)) {
      const newFilter = selected.filter((genre) => genre != selectedGenre);
      setSelected(newFilter);
    } else {
      setSelected([...selected, selectedGenre]);
    }
  };

  const filteredList = animes.filter(
    (anime) =>
      selected.length === 0 ||
      selected.every((genre) => anime.genre.includes(genre))
  );


  const searchedList = filteredList.filter((anime) =>
    anime.name.toLowerCase().startsWith(search.trim())
  );

  useEffect(() => {
  setSelected([]);
}, [category]);
  return (
    <div className="animes">
      <div className="animes_controls">
        <SearchBar value={search} handleSearch={setSearch} />
        <Filters>
          {genres.map((genre) => (
            <FilterCard
              genre={genre}
              active={selected.includes(genre)}
              handleSelected={handleSelected}
            />
          ))}
        </Filters>
      </div>

      <h1 className="animes_title">{title}</h1>
      {loading ? (
        <Loader />
      ) : (
        <CardList animes={searchedList} category={category} />
      )}
    </div>
  );
}

export default Animes;
