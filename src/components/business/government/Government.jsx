import "./Government.css";
const Government = () => {
  return (
   <section className="government">
      <div className="government-left">
        <h2>
            We partner with all 50 states and the District of Columbia to improve public health outcomes.</h2>
        <button className="portal-btn">Federal Government Solutions</button>
        <button className="portal-btn">State Government Solutions</button>
        <hr></hr>
        <p className="subtitle">
          Life Sciences
        </p>
        <h2>We support 120 global life sciences companies to drive innovation and improve patient outcomes.</h2>
        <button className="portal-btn">Life Sciences Solutions</button>
        
      </div>
      <div className="government-right">
             <div className="image-wrapper">
          <img
            src={require("../../../assets/gover/gover.png")}
            alt="portal"
            className="government-img"
          />
        </div>
      </div>
    </section>
  );
}
export default Government;
