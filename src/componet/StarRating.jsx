const StarRating = ({ rating }) => {
  return (
    <div className="star-5-container">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < rating ? "#F2C94C" : "#ccc" }}
          className="star-5"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
