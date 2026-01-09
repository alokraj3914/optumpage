import "./Page.css";
const Page = () => {
  return (
   <section className="page">
      <div className="page-left">
        <p className="payers">Payers</p>
        <h2>4 out of 5 U.S. health plans rely on us to boost member health and improve operations.</h2>
        <button className="portal-btn">Payer Solutions</button>
        <hr></hr>
        <p className="subtitle">
          Providers
        </p>
        <h2>We support 130,000 physicians, 9 out of 10 U.S. hospitals and 67,000 pharmacies with innovative solutions.</h2>
        <button className="portal-btn">Provider Solutions</button>
        
      </div>
      <div className="page-right">
             <div className="image-wrapper">
          <img
            src={require("../../../assets/page/providers.png")}
            alt="portal"
            className="page-img"
          />
        </div>
      </div>
    </section>
  );
}
export default Page;
