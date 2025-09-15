import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex relative overflow-hidden split">
      {/* Luca's Minecraft Side */}
      <Link
        to="/luca"
        className="panel luca"
      >
        <div className="icons">
          <img className="diamond" src="/assets/diamond.png" alt="" />
          <img className="star" src="/assets/star.png" alt="" />
          <img className="heart" src="/assets/heart.png" alt="" />
        </div>
        <div className="content">
          <h1 className="luca-title">LUCA</h1>
          <p className="subtitle">Minecraft Adventures</p>
          <span className="cta">Enter World</span>
        </div>
      </Link>

      {/* Sofia's K-Pop Side */}
      <Link
        to="/sofia"
        className="panel sofia"
      >
        <div className="content">
          <h1 className="sofia-title">SOFIA</h1>
          <p className="subtitle">K-Pop × Demon Hunters</p>
          <span className="cta">Enter Realm</span>
        </div>
      </Link>
    </div>
  );
};

export default Index;