import Container from "./Cardin"
import "./Signcard.css";

const Signcard = () => {
  const cards = [
    {
      title: "Optum Pay",
      desc: "Manage your electronic claims payments, from receiving to reconciliation, plus remittance data"
    },
    {
      title: "Optum Rx PBM Portal",
      desc: "Access resources and self services options"
    },
    {
      title: "Provider Express",
      desc: "Creating a unified system that lowers the cost of healthcare",
    },
     {
      title: "UHC provider portal",
      desc: "Creating a unified system that lowers the cost of healthcare",
    },

  ];
     return (
    <section className="footer-section">
      <h1 className="section-title">Advance care, efficiency and outcomes</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Container key={index} {...card} />
        ))}
      </div>
    </section>
  );

};

export default Signcard;
