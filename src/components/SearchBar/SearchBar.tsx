import { CiSearch } from "react-icons/ci";
import './SearchBar.scss'

function SearchBar() {
  return (
    <div className="search">
      <CiSearch className="icon" />
      <input className="input" type="text" 
       placeholder="Search for movies or TV series"/>
    </div>
  );
}

export default SearchBar;
