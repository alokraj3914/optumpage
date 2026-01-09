import "./Main.css";
const Main = () => {
  return (
   <section className="main">
      <div className="main-left">
        <div className="image-wrapper">
          <img
            src={require("../../../assets/mainImg/main.jpg")}
            alt="patient portal"
            className="main-img"
          />
        </div>
      </div>

      <div className="main-right">
        <p className="Healthcare">Health care information</p>
        <h1>Visit your patient portal</h1>
        <p className="subtitle">
          Make payments, submit copays, see your billing statements,
          view test results, schedule appointments and message your care team.
        </p>
        <button className="portal-btn">Find your portal by state</button>
      </div>
    </section>
  );
}
export default Main;
