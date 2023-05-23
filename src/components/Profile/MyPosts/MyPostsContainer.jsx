import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator } from "../../../data/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let onChangePost = (text) => {

    props.store.dispatch(updateNewPostTextActionCreator(text));
  }
  return (
    <MyPosts
      updateNewPostText={onChangePost}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
