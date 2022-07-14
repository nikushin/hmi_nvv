import React from 'react';
import ReactDOM from 'react-dom/client';
import socketService from "./socket-service";
import {Provider} from 'react-redux';
import App from './components/app/app';
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";


export const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
