const ExploreCard = ({ title, desc, link }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-desc">
          <p>{desc}</p>
        </div>
        
        <a href="#"className="card-link"> {link}
        </a>
      </div>
    </div>
  );
};

export default ExploreCard;
