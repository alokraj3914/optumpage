import "./Footer.css";
const Footer = () => {
  return (
   <section className="footer">
      <div className="footer-left">
        <p className="optumism">Health finances</p>
        <h1>Make your health care dollars go further</h1>
        <p className="subtitle">
          You’ll be surprised at all the everyday health items you can buy with your HSA and FSA card — saving up to 30% with pretax dollars.
        </p>
        <button className="portal-btn">See where you can shop and save</button>
      </div>
      <div className="footer-right">
             <div className="image-wrapper">
          <img
            src={require("../../../assets/wrap/pharmacy.jpg")}
            alt="portal"
            className="footer-img"
          />
        </div>
      </div>
    </section>
  );
}
export default Footer;
