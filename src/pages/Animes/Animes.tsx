import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Animes.scss";
import Filters from "../../components/Filters/Filters";
import FilterCard from "../../components/FilterCard/FilterCard";
import RatingFilter from "../../components/RatingFilter/RatingFilter";
import YearFilter from "../../components/YearFilter/YearFilter";
import Sorter from "../../components/Sorter/Sorter";

type AnimeProps = {
  title: string;
  category: "Home" | "Series" | "Movies" | "Favorites";
};
type FiltersState = {
  genres: string[];
  year: number;
  rating: number;
};

type HandleFilterProps =
  | { key: "year" | "rating"; value: number }
  | { key: "genres"; value: string };

function Animes({ title, category }: AnimeProps) {
  const [filters, setFilters] = useState<FiltersState>({
    rating: 0,
    year: 1970,
    genres: [],
  });
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
  const [sorting, setSorting] = useState<"Newer" | "Older" | "Rating">("Newer");
  console.log(sorting)

  const handleSelected = ({ key, value }: HandleFilterProps) => {
    if (key === "genres" && typeof value === "string") {
      setFilters((prev) => {
        const newGenres = prev.genres.includes(value)
          ? prev.genres.filter((genre) => genre !== value)
          : [...prev.genres, value];
        return { ...prev, genres: newGenres };
      });
    } else {
      setFilters((prev) => {
        return { ...prev, [key]: value };
      });
    }
  };
  const filteredList = animes.filter((anime) => {
    // Filtro de genero
    const matchesGenres =
      filters.genres.length === 0 ||
      filters.genres.every((genre) => anime.genre.includes(genre));

    // Filtro de año
    const matchesYear = anime.release_date >= filters.year;

    // Filtro de rating
    const matchesRating = anime.rating >= filters.rating;

    

    //Filtros juntos
    return matchesGenres && matchesYear && matchesRating;
  });


  const searchedList = filteredList.filter((anime) =>
    anime.name.toLowerCase().startsWith(search.trim())
  );

  // Orden dependiendo del estado sorting
const sortedList = [...searchedList].sort((a, b) => {
  if (sorting === "Newer") {
    return b.release_date - a.release_date; 
  }
  if (sorting === "Older") {
    return a.release_date - b.release_date; 
  }
  if (sorting === "Rating") {
    return b.rating - a.rating; 
  }
  return 0;
});

  useEffect(() => {
    setFilters({
      year: 1970,
      rating: 0,
      genres: [],
    });
    setSorting('Newer')
  }, [category]);
  return (
    <div className="animes">
      <div className="animes_controls">
        <SearchBar value={search} handleSearch={setSearch} />
        <div className="animes_controls_buttons">
          <Sorter handleSelection={setSorting} />
          <Filters>
            <RatingFilter
              value={filters.rating}
              handleFilter={handleSelected}
            />

            <YearFilter value={filters.year} handleFilter={handleSelected} />

            <div className="genres_list">
              {genres.map((genre) => (
                <FilterCard
                  genre={genre}
                  active={filters.genres.includes(genre)}
                  handleSelected={handleSelected}
                />
              ))}
            </div>
          </Filters>
        </div>
      </div>

      <h1 className="animes_title">{title}</h1>
      {loading ? (
        <Loader />
      ) : (
        <CardList animes={sortedList} category={category} />
      )}
    </div>
  );
}

export default Animes;
