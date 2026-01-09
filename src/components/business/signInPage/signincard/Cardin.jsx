const Cardin = ({  title, desc }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardin;
