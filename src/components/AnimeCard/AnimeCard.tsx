import React from "react";
import "./AnimeCard.scss";
import { Link } from "react-router-dom";

type AnimeCardProps = {
  id: number
  image: string;
  name: string;
  genre: string[];
  children?: React.ReactNode;
};

function AnimeCard({ id,image, name, genre, children }: AnimeCardProps) {
  return (
    <Link to={`/details/${id}`} className="card">
      <img className="card_image" src={image} alt={name} />

      {children}

      <div className="card_genres">
        {genre.slice(0, 2).map((genre) => (
          <span key={genre}>{genre}</span>
        ))}

        {genre.length > 2 && (
          <div className="more_genres_container">
            <span className="more_genres_trigger">+{genre.length - 2}</span>
            <div className="more_genres_list">
              {genre.slice(2).map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="card_title">{name}</p>
    </Link>
  );
}

// Labels opcionales
type AnimeCardLabelsProps = {
  children: React.ReactNode;
};

AnimeCard.Labels = function AnimeCardLabels({
  children,
}: AnimeCardLabelsProps) {
  return <div className="card_labels">{children}</div>;
};

export default AnimeCard;
