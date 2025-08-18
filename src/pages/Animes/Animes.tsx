import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAnimes } from "../../services/AnimeService";
import "./Animes.scss";

type AnimeProps={
    title: string;
    category: 'Home'|'Series'|'Movies'|'Favorites'
}

function Animes({title, category}: AnimeProps) {
  const {animes, loading} = useAnimes(category)
  console.log(animes)
  return (
    <div className="animes">
      <SearchBar />
      <h1 className="animes_title">{title}</h1>
      <CardList/>
    </div>
  );
}

export default Animes;
