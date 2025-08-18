import './AnimeCard.scss'

function AnimeCard() {
  return (
    <div className="card">
        <img className="card_image"
         src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="thumbnail" />
         <div className='card_labels'>
            <p>2019</p>
            <p>Serie</p>
         </div>
         <div className='card_genres'>
            <span>Romance</span>
            <span>Drama</span>
         </div>
         <p className='card_title'>Kimi no nawa</p>
    </div>
  )
}

export default AnimeCard