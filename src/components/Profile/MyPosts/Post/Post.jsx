import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://lh3.googleusercontent.com/ogw/AOLn63G-EwQ22DG1VH0kf2sqX9MoRBTNzTY5aP16mFQx=s32-c-mo"
          alt=""
        />
        {props.text}
        <div>
          <span> Like - {props.likes}</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
