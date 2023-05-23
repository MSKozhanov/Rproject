import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../data/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post text={p.text} likes={p.likes} />
  ));
  let onAddPost = () => {
    props.addPost();
  }
  let onChangePost = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
    
  }
  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChangePost}
            value={props.newPostText} />
        </div>
        <button
          onClick={onAddPost}
          onChange={onChangePost}>
          Add new
        </button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
