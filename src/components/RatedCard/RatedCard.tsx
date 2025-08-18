import './RatedCard.scss'

type RatedCardProp={
    id: number;
    name: string;
    synopsys: string;
    image: string
}

function RatedCard({id,name,synopsys,image}:RatedCardProp) {
  return (
    <div className="rated_card">
      <div className="rated_card_data">
        <h1>{name}</h1>
        <p>{synopsys}</p>
        <div className="rated_card_actions">
          <button className="rated_card_watch">Watch Now</button>

          <button className="rated_card_details">Details</button>
        </div>
      </div>
      <img className='rated_card_image' src={image} alt="Cover" />
    </div>
  );
}

export default RatedCard;
