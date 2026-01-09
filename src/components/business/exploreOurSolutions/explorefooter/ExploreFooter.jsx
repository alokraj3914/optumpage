import "./ExploreFooter.css"
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const ExploreFooter = () => {
    const cards = [
    {
      category: "Company",
      links: ["About Us", "Careers", "Optum for Business", "More Optum sites"],
    },
    {
      category: "Support",
      links: ["Customer Support", "Business Support", "Contact Us"],
    },
    {
      category: "Countries",
      links: ["Optum Brazil", "Optum India", "Optum Ireland", "Optum United Kingdom"],
    },
    {
      category: "Accessibility",
      links: [
        "Language Assistance / Non-Discrimination Notice",
        "Asistencia de Idiomas / Aviso de no Discriminación",
        "語言協助 / 不歧視通知",
      ],
    },
  ];

    return(
        <div className="help">
            <h1>Let us help you find the solution that best fits your needs</h1>
            <button className="footer-btn">Get in touch</button>
        <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {cards.map((card, index) => (
            <div className="footer-column" key={index}>
              <h4>{card.category}</h4>
              {card.links.map((item, i) => (
                <a href="#" key={i}>{item}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-follow">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Optum, Inc. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Opt out</a>
            <a href="#">Accessibility</a>
            <a href="#">Vulnerability report</a>
            <a href="#">Do Not Call policy</a>
          </div>
        </div>

      </div>
    </footer>
    </div>
    )
};
export default ExploreFooter;