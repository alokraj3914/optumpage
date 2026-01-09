import { useState } from "react";
import "./CustomerPortals.css";

const portals = [
  {
    title: "Providers and organizations",
    content: "Login options and resources for healthcare providers and organizations."
  },
  {
    title: "Employers",
    content: "Employer portals for benefits, claims, and employee management."
  },
  {
    title: "Brokers and consultants",
    content: "Access tools and portals for brokers and consultants."
  }
];

const CustomerPortals = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="customer-portals">
      <h2>All customer portals</h2>

      <p className="description">
        If you’re not contracted with Optum or don’t have patients delegated to Optum,
        access sign-ins from the links below or access resources directly such as prior
        authorization lists, claims manuals and reconsideration forms from the{" "}
        <a href="#">HCP resources page</a>.
      </p>

      <div className="accordion">
        {portals.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span
                className={`arrow ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                ›
              </span>
            </button>

            {activeIndex === index && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerPortals;
