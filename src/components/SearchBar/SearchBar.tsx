import { CiSearch } from "react-icons/ci";
import "./SearchBar.scss";

//Types-------------------------------------------
type SearchProps = {
  value: string;
  handleSearch: React.Dispatch<React.SetStateAction<string>>;
};

//Component-------------------------------------------
function SearchBar({ value, handleSearch }: SearchProps) {
  return (
    <div className="search">
      <CiSearch className="icon" />
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default SearchBar;
