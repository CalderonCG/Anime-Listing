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

//Types------------------------------------------
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
  // States and const --------------------------------------------------------------------
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
  //Object with filter parameters
  const [filters, setFilters] = useState<FiltersState>({
    rating: 0,
    year: 1970,
    genres: [],
  });
  const { animes, loading } = useAnimes(category); //Fetches the animes if they are series, movies or bookmarked, depending on the category prop
  const [search, setSearch] = useState(""); //Search input
  const [sorting, setSorting] = useState<"Newer" | "Older" | "Rating">("Newer"); //Sorting option

  //Function that handles the filter changes, it takes the key of the filter to apply and the value-------------------------
  const handleFilter = ({ key, value }: HandleFilterProps) => {
    //If the key received is genres then it maps the array
    if (key === "genres") {
      setFilters((prev) => {
        const newGenres = prev.genres.includes(value)
          ? prev.genres.filter((genre) => genre !== value) //If the genre is already in the array then it removes it
          : [...prev.genres, value]; //If it isnt there, it adds the genre
        return { ...prev, genres: newGenres };
      });
    } else {
      //If the key is either year or rating
      setFilters((prev) => {
        return { ...prev, [key]: value }; //Just maps that new value to the key
      });
    }
  };

  // Applying filters  ===============-------------------------------------------------------------
  const filteredList = animes.filter((anime) => {
    // Genre filter checks if the genre array exist inside of the genres of that anime
    const matchesGenres =
      filters.genres.length === 0 ||
      filters.genres.every((genre) => anime.genre.includes(genre));

    // Year filter checks if the year is equal or lower than the release date of the anime
    const matchesYear = anime.release_date >= filters.year;

    // Rating filter checks if the rating is equal or lower than the release date of the anime
    const matchesRating = anime.rating >= filters.rating;

    // Checks if the anime fulfills all the filters together
    return matchesGenres && matchesYear && matchesRating;
  });

  // Applying search---------------------------------------------------------------------------------
  // Filters the already filtered list checking if the anime starts with the current input in search
  const searchedList = filteredList.filter((anime) =>
    anime.name.toLowerCase().startsWith(search.trim())
  );

  // Applying sorting---------------------------------------------------------------------------------
  const sortedList = [...searchedList].sort((a, b) => {
    if (sorting === "Newer") {
      //Sorts with the newest anime first (default sorting)
      return b.release_date - a.release_date;
    }
    if (sorting === "Older") {
      //Sorts with the older anime first
      return a.release_date - b.release_date;
    }
    if (sorting === "Rating") {
      //Sorts with the higher rated anime first
      return b.rating - a.rating;
    }
    return 0;
  });

  //UseEffect-----------------------------------------------------------
  //Resets filters and sorting to default value when category changes
  //This is needed because the anime page component is shared between routes, so it keeps the states even when the route changes
  useEffect(() => {
    setFilters({
      year: 1970,
      rating: 0,
      genres: [],
    });
    setSorting("Newer");
  }, [category]);

  //The component----------------------------------------------------------------------------------------------------
  return (
    <div className="animes">
      <div className="animes_controls">
        {/* Search and filter controls---------------------------------------------- */}
        <SearchBar value={search} handleSearch={setSearch} />
        <div className="animes_controls_buttons">
          <Sorter handleSelection={setSorting} />
          {/* To avoid prop drillin Filter is a component that receives children
          That way I dont need to send Filters the handleFilter prop, and then send it again to the components inside him
          Is this ok tho? Or is avoiding just 1 level of prop drilling not worth this approach */}
          <Filters>
            <RatingFilter value={filters.rating} handleFilter={handleFilter} />
            <YearFilter value={filters.year} handleFilter={handleFilter} />
            <div className="genres_list">
              {genres.map((genre) => (
                <FilterCard
                  genre={genre}
                  active={filters.genres.includes(genre)}
                  handleFilter={handleFilter}
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
