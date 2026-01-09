import Container from "./Compound";
import "./FooterCard.css";

const FooterCard = () => {
  const cards = [
    {
      category: "💁‍♀️",
      title: "Get reliable support",
      desc: "Find product support portals, enrollment forms, payer lists and more.",
      link: " Optum product support →"
    },
    {
      category: "🤝",
      title: "Join our community",
      desc: "Whether it's about health care, financial or pharmacy-related services, we'll help you find the answer you need.",
      link: "Join the conversation→"
    },

  ];
     return (
    <section className="footer-section">
      <h1 className="section-subtitle">Current customer resources</h1>
      <p className="section-title">Explore helpful resources and get support.</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <Container key={index} {...card} />
        ))}
      </div>
    </section>
  );

};

export default FooterCard;
