import "./style.css";

import xboxBanner from "../../../../assets/xboxBanner.jpg";
import iphoneBanner from "../../../../assets/iphoneBanner.jpg";
import ps5Banner from "../../../../assets/ps5Banner.jpg";

export const BannersContainer = () => {
  return (
    <section className="bannersContainer">
      <div className="banner">
        <img src={xboxBanner} alt="banner" />
      </div>
      <div className="banner">
        <img src={iphoneBanner} alt="banner" />
      </div>
      <div className="banner">
        <img src={ps5Banner} alt="banner" />
      </div>
    </section>
  );
};
