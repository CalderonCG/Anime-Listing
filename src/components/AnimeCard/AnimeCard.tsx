import React from "react";
import "./AnimeCard.scss";
import { Link } from "react-router-dom";

//Types------------------------------------------------------------------
type AnimeCardProps = {
  id: number
  image: string;
  name: string;
  genre: string[];
  children?: React.ReactNode;
};

type AnimeCardLabelsProps = {
  children: React.ReactNode;
};


//Component --------------------------------------------------------
function AnimeCard({ id,image, name, genre, children }: AnimeCardProps) {
  return (
    // The card redirects to the details of that anime
    <Link to={`/details/${id}`} className="card">
      <img className="card_image" src={image} alt={name} />
      {/* The compound labels are rendered here */}
      {children}

      {/* It only shows the first 2 genres */}
      <div className="card_genres">
        {genre.slice(0, 2).map((genre) => (
          <span key={genre}>{genre}</span>
        ))}

        {/* The remainding genres are show in a container that is only visible by hovering */}
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

// Compound children ------------------------------------------------------------

AnimeCard.Labels = function AnimeCardLabels({
  children,
}: AnimeCardLabelsProps) {
  return <div className="card_labels">{children}</div>;
};

export default AnimeCard;
