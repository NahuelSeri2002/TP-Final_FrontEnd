
const StarRating = ({ rating = 5, totalStars = 5 }) => {
  return (
    <div className="rating-stars">
      {Array.from({ length: totalStars }, (_, index) => {
        const isDisliked = index >= rating;
        return (
          <span
            key={index}
            className={`star ${isDisliked ? "dislike-star" : ""}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
