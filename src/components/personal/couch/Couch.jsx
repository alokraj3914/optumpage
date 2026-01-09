import "./Couch.css";
const Couch = () => {
  return (
   <section className="couch">
      <div className="couch-left">
        <div className="image-wrapper">
          <img
            src={require("../../../assets/couch/couch.jpg")}
            alt="patient portal"
            className="couch-img"
          />
        </div>
      </div>

      <div className="couch-right">
        <p className="pharmacy">Online pharmacy</p>
        <h1>You’ve got better things to do than stand in line at the pharmacy</h1>
        <p className="subtitle">
          Optum Home Delivery Pharmacy brings your medications directly to your door and gives you 24/7 access to our licensed pharmacists — ready to answer any question.
        </p>
        <button className="portal-btn">Learn about home delivery</button>
      </div>
    </section>
  );
}
export default Couch;
