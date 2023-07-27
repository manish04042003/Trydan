import "./Banner.scss";
import BaneerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugit ducimus cumque repellendus nesciunt quas eos placeat vel
            dolores dolorem quis, optio non
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BaneerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
