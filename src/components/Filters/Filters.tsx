import { useState } from "react";
import "./Filter.scss";
import FilterCard from "../FilterCard/FilterCard";
function Filters() {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <div className="filters">
      <button className="filters_button" onClick={() => setShowMenu(!showMenu)}>
        Filters
      </button>

      {showMenu && (
        <div className="filters_menu">
            {genres.map((genre) => <FilterCard genre={genre}/>)}
      
        </div>
      )}
    </div>
  );
}

export default Filters;
