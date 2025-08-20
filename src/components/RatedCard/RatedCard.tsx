import { FaPlay } from "react-icons/fa";
import "./RatedCard.scss";
import { Link } from "react-router-dom";

// Types -----------------------------
type RatedCardProp = {
  id: number;
  name: string;
  synopsys: string;
  image: string;
};

// Component -------------------------------------------------------
function RatedCard({ id, name, synopsys, image }: RatedCardProp) {
  return (
    <div className="rated_card">
      <div className="rated_card_data">
        <h1>{name}</h1>
        <p>{synopsys}</p>
        <div className="rated_card_actions">
          <button className="rated_card_watch">
            <FaPlay />
            Watch Now
          </button>

          <Link to={`/details/${id}`} className="rated_card_details">Details</Link>
        </div>
      </div>
      <img className="rated_card_image" src={image} alt="Cover" />
    </div>
  );
}

export default RatedCard;
