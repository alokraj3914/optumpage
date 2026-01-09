import tiles from "../../../assets/tiles/tiles.png";
import "./Tiles.css";
const Tiles = () => {
    return(
        
        <div>
            <img src={tiles} alt="Person" className="tiles-img" />
            <section className="industry">
            
        <h2>
          An industry partner offering solutions <br />
          <em>scaled to your needs</em>
        </h2>
        </section>
        </div>
    )
};

export default Tiles;