import "./Broker.css";
const Broker = () => {
  return (
   <section className="broker">
      <div className="broker-left">
        <div className="image-wrapper">
          <img
            src={require("../../../assets/brokers/broker.png")}
            alt="patient portal"
            className="broker-img"
          />
        </div>
      </div>

      <div className="broker-right">
        <h1>Employers, brokers and consultants</h1>
        <p className="subtitle">
          Fortune 100 companies trust us to enhance employee health and manage costs.
        </p>
        <button className="portal-btn">Employer Solutions</button>
        <button className="portal-btn">Broker and consultant solutions</button>
      </div>
    </section>
  );
}
export default Broker;
