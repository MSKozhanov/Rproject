import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((msg) => (
    <Message text={msg.text} />
  ));
  let addMessage = () => {
    props.addMessage();
    // props.dispatch(addMessageActionCreator());
  };
  let onChangeMessage = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
    // props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <button onClick={addMessage} onChange={onChangeMessage}>
          Send
        </button>
      </div>
      <div>
        <textarea
          placeholder="Enter your message"
          onChange={onChangeMessage}
          value={state.newMessageText}
        />
      </div>
    </div>
  );
};
export default Dialogs;
