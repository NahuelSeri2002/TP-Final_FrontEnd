import StarRating from "./StarRating"
import useLocalStorage from "../hooks/useLocalStorage"

const AlbumCard = ({album}) => {
    const {title,artist,cover,rating} = album;
    const[userVote, setUserVote] = useLocalStorage(`voto_${album.id}`, null);

    const toggleVote = (type) => {
        setUserVote(userVote === type ? null : type);
    };

  return (
    <div className="card">
        <h3>{title}</h3>
        <img src={cover} alt={title} />
        <h4 className="artist">{artist}</h4>

        <StarRating rating={rating}/>
      
        <div className="card-btn">
            <button
                className={`btn btn-primary like ${userVote === 'like' ? 'active' : ''}`}
                onClick={() => toggleVote('like')}
                aria-label="Me gusta"
            >
                <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
                className={`btn btn-primary dislike ${userVote === 'dislike' ? 'active' : ''}`}
                onClick={() => toggleVote('dislike')}
                aria-label="No me gusta"
            >
                <i className="fa-solid fa-thumbs-down"></i>
            </button>
        </div>

        <p>¡Compartí tu valoración!</p>
    </div>
  )
}

export default AlbumCard
