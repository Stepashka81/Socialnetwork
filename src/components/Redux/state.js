import {rerenderEntireTree} from "../../Render";

export let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Let's start fishing", likesCount: 10},
            {id: 2, message: "I love tennis", likesCount: 1},
            {id: 3, message: "Hello world", likesCount: 2},
            {id: 4, message: "Hello world", likesCount: 2},
            {id: 5, message: "Hello world", likesCount: 2},
            {id: 6, message: "Hello world", likesCount: 2},
            {id: 7, message: "Hello world", likesCount: 2}
        ],

        newPostText:'Insert new post'

    },

    dialogsPage:
        {

            dialogs: [
                {id: 1, name: 'Stepan'},
                {id: 2, name: 'Federer'},
                {id: 3, name: 'Sergey'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Aleksey'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Good bye'},
                {id: 5, message: 'OK'}
            ]
        },
    sidebar:{}

}
window.state=state;

export let addPost=()=>{

    let newId=state.profilePage.posts[state.profilePage.posts.length-1].id+1;

    let newPost={
        id:newId,
        message:state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';

     rerenderEntireTree(state);

     console.log(state.profilePage.posts)
}

export let updateNewPostText=(newText)=>{

    state.profilePage.newPostText=newText;

    rerenderEntireTree(state);

}




 export default state;








