import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, state} from "./components/Redux/state";
import {updateNewPostText} from "./components/Redux/state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

//Функция для перересовки дерева после изменений в основные данные state.js
 export let rerenderEntireTree=(state)=> {

    root.render(
        <React.StrictMode>

            <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>

        </React.StrictMode>
    );
}


