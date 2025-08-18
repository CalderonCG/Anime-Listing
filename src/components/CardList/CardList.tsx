import type { AnimeType } from "../../services/AnimeService";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./CardList.scss";

type ListProps = {
  children: React.ReactNode;
};

function CardList({ children }: ListProps) {
  return (
    <div className="card_list">

      {children}
    </div>
  );
}

export default CardList;
