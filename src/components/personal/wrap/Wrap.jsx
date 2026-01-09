import "./Wrap.css";
const Wrap = () => {
  return (
   <section className="wrap">
      <div className="wrap-left">
        <p className="finances">Health finances</p>
        <h1>Make your health care dollars go further</h1>
        <p className="subtitle">
          You’ll be surprised at all the everyday health items you can buy with your HSA and FSA card — saving up to 30% with pretax dollars.
        </p>
        <button className="portal-btn">See where you can shop and save</button>
      </div>
      <div className="wrap-right">
             <div className="image-wrapper">
          <img
            src={require("../../../assets/wrap/pharmacy.jpg")}
            alt="portal"
            className="wrap-img"
          />
        </div>
      </div>
    </section>
  );
}
export default Wrap;
