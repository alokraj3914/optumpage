import Container from "./Container";
import "./FooterCard.css";

const FooterCard = () => {
  const cards = [
    {
      category: "Join Us",
      title: "Explore Optum jobs",
      desc: "Check out current career opportunities to discover how you can start caring, connecting and growing — together with Optum.",
      link: " Search Careers →"
    },
    {
      category: "Support",
      title: "You’ve got questions, Optum has answers",
      desc: "Whether it’s about health care, financial or pharmacy-related services, we’ll help you find the answer you need.",
      link: "View Customer Support →"
    },

  ];
     return (
    <section className="footer-section">
      <p className="section-subtitle">Health and wellness</p>
      <h1 className="section-title">A healthier you happens here</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Container key={index} {...card} />
        ))}
      </div>
    </section>
  );

};

export default FooterCard;
