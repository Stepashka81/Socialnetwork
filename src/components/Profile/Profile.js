import React from "react";
import Myposts from "./Myposts/Myposts.js"
import ProfileInfo from "./Profileinfo/Profileinfo";


const Profile=(props)=>{


    return (
      <>
        <ProfileInfo description="I am love tennis" ava="https://picsum.photos/id/64/50/50" mainImg="https://picsum.photos/id/11/1000/250"/>
        <Myposts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
        
      </>
    )
}
export default Profile