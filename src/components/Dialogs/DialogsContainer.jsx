import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage; //

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let onChangeMessage = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onChangeMessage}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
