import Container from "./Container"
import "./Card.css";

const Card = () => {
  const cards = [
    {
      title: "Consulting Services",
      desc: "Helping organizations create change and drive growth",
      link: " View Solutions →"
    },
    {
      title: "Data and analytics",
      desc: "Turning real-world data into valuable insights",
      link: "View Solutions →"
    },
    {
      title: "Financial solutions",
      desc: "Creating a unified system that lowers the cost of healthcare",
      link: "View Solutions →"
    },
    {
      title: "Health benefits solutions",
      desc: "Empowering employers and members",
      link: "View Solutions →"
    },
    {
      title: "Healthcare access",
      desc: "Improving the patient and member journey",
      link: "View Solutions →"
    },
    {
      title: "Operations and technology",
      desc: "Evolving organizations through market-leading technology and expertise",
      link: "View Solutions →"
    },
    {
      title: "Pharmacy benefit management",
      desc: "Driving better outcomes and lowering costs",
      link: "View Solutions →"
    },
    {
      title: "Pharmacies",
      desc: "Increasing medication adherence and access",
      link: "View Solutions →"
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

export default Card;
