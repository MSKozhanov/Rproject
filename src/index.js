import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './data/redux-store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEnrireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    // addPost={store.addPost.bind(store)}
                    // addMessage={store.addMessage.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    // updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </BrowserRouter>

        </React.StrictMode>
    );

}
rerenderEnrireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEnrireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


