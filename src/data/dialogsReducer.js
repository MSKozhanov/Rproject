const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        { id: 1, name: "Mike" },
        { id: 2, name: "Evgeniy" },
        { id: 3, name: "Sergey" },
        { id: 4, name: "Konstantin" },
    ],
    messagesData: [
        { id: 1, text: "Hello1" },
        { id: 2, text: "Hello2" },
        { id: 3, text: "Hello3" },
        { id: 4, text: "Hello4" },
    ],
    newMessageText: 'New message text'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });
export default dialogsReducer;