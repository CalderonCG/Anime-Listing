import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Animes.scss";
import RatedList from "../../components/RatedList/RatedList";

type AnimeProps = {
  title: string;
  category: "Home" | "Series" | "Movies" | "Favorites";
};

  function Animes({ title, category }: AnimeProps) {
  const { animes, loading } = useAnimes(category);
  const [search, setSearch] = useState('');

  const filteredList = animes.filter((anime)=> anime.name.toLowerCase().startsWith(search.trim()))
  return (
    <div className="animes">
      <SearchBar value={search} handleSearch={setSearch} />
      <h1 className="animes_title">{title}</h1>
      {loading ? <Loader /> : <CardList animes={filteredList} category={category} />}
    </div>
  );
}

export default Animes;
