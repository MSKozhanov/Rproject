import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 0, text: "Hello world", likes: "5" },
                { id: 1, text: "My name is Mike", likes: "4" },
                { id: 2, text: "Smth", likes: "3" },
                { id: 3, text: "Abc", likes: "5" },
                { id: 4, text: "efeftjrr", likes: "0" },
            ],
            newPostText: 'New post text'
        },
        dialogsPage: {
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
        },
        sidebar:{

        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}



window.store = store;
export default store;