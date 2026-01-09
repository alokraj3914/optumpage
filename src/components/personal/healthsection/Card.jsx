const Card = ({ img, category, title, desc }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />

      <div className="card-content">
        <span className="card-category">{category}</span>

        <div className="card-title">
          <h3>{title}</h3>
        </div>

        <div className="card-desc">
          <p>{desc}</p>
        </div>

        <a href="#" className="card-link">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default Card;
