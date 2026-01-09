import Card from "./Card";
import "./HealthSection.css";

const HealthSection = () => {
  const cards = [
    {
      category: "Healthy living",
      title: "Health screening tests for adults and how to get them",
      desc: "Staying on top of suggested health screenings doesn’t mean you have to pack your schedule with doctor visits. Knowing which ones are important and why can help you focus on what matters.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    },
    {
      category: "Health care finances",
      title: "The best FSA eligible items you can buy before the end of the year",
      desc: "Overestimating your FSA can leave you with an excess of funds you have to use by the end of the year, but there are a number of FSA eligible items you can pick up.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
    {
      category: "Healthy living",
      title: "Supercharge your body this cold and flu season",
      desc: "Taking steps like getting the recommended vaccines and implementing healthy habits can help prevent respiratory infections while also helping to keep others around you healthy.",
      img: "https://images.unsplash.com/photo-1546554137-f86b9593a222",
    },
  ];

  return (
    <section className="health-section">
      <p className="section-subtitle">Health and wellness</p>
      <h1 className="section-title">A healthier you happens here</h1>
      <p className="section-desc">
        Find tips, ideas and information to inspire healthy living at any age,
        including topics important to you and your family.
      </p>

      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default HealthSection;
