import './RatedCard.scss'

function RatedCard() {
  return (
    <div className="rated_card">
      <div className="rated_card_data">
        <h1>Name</h1>
        <p>Description</p>
        <div className="rated_card_actions">
          <button className="rated_card_watch">Watch Now</button>

          <button className="rated_card_details">Details</button>
        </div>
      </div>
      <img src="https://cdn.myanimelist.net/images/anime/1111/121262l.jpg" alt="Cover" />
    </div>
  );
}

export default RatedCard;
