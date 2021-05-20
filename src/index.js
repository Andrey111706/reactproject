import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = () =>{
    ReactDOM.render(
        <React.StrictMode>

            <App store={store}/>

        </React.StrictMode>,
        document.getElementById('root')

    );
}
renderTree(store.getState())
store.subscribe(() => {renderTree()});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
