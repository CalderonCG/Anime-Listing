import React from "react";
import "./AnimeCard.scss";

type AnimeCardProps = {
  image: string;
  name: string;
  genre: string[];
  children?: React.ReactNode;
};

function AnimeCard({ image, name, genre, children }: AnimeCardProps) {
  return (
    <div className="card">
      <img className="card_image" src={image} alt={name} />

      {children}

      <div className="card_genres">
        {genre.slice(0, 2).map((g) => (
          <span key={g}>{g}</span>
        ))}

        {genre.length > 2 && (
          <div className="more_genres_container">
            <span className="more_genres_trigger">
              +{genre.length - 2}
            </span>
            <div className="more_genres_list">
              {genre.slice(2).map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="card_title">{name}</p>
    </div>
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
