import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts=[
    {id:1,message:"Let's start fishing",likesCount:10},
    {id:2,message:"I love tennis",likesCount:1},
    {id:3,message:"Hello world",likesCount:2},
    {id:4,message:"Hello world",likesCount:2},
    {id:5,message:"Hello world",likesCount:2},
    {id:6,message:"Hello world",likesCount:2},
    {id:7,message:"Hello world",likesCount:2}
]

let dialogs=[
    {id:1, name:'Stepan'},
    {id:2, name:'Federer'},
    {id:3, name:'Sergey'},
    {id:4, name:'Sasha'},
    {id:5, name:'Aleksey'}
]

let messages=[
    {id:1, message:'Hi'},
    {id:2, message:'Hello'},
    {id:3, message:'How are you?'},
    {id:4, message:'Good bye'},
    {id:5, message:'OK'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
