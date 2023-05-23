import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.image}
          src="https://img.freepik.com/premium-vector/cityscape-on-white-background-building-perspective-modern-building-in-the-city-skyline-city-silhouette-city-skyscrapers-business-center-vector-illustration-in-flat-design_51530-3359.jpg?w=1800"
          alt="none"
        />
      </div>
      <div className={classes.description}>avatar + description</div>
    </div>
  );
};
export default ProfileInfo;
