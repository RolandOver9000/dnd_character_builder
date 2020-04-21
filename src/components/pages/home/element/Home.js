import React from "react";
import HomeStyle from "../style/HomeStyle";
import DnDLogo from "../../../fixLayout/style/dnd_5.png";

export const Home = () => {
  return (
    <HomeStyle>
      <div>
        <div className="side-picture">
          <img
            alt="no image here"
            src={DnDLogo}
            style={{ width: "7%", height: "7%" }}
          />
        </div>
        <div className="register-login">Hi Im login.</div>
      </div>
    </HomeStyle>
  );
};

export default Home;
