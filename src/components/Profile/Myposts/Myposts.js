import React from "react"
import styles from "./Myposts.module.css"
import SinglePost from "./Singlepost/Singlepost"
// import {getMouseEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const MyPosts = (props) => {


     let postsElements = props.posts.map((post) => {
        return (
            <SinglePost key={post.id} message={post.message} likes={post.likesCount}/>
        )
    })

    let newPostElement = React.createRef();


    let addNewPost = () => {
    //    let text = newPostElement.current.value;
        props.addPost();


    }

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };


    return (

        <div className={styles.postBlock}>
            <h3 className={styles.head}>MY POSTS</h3>

            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>

            <div>
                <button onClick={addNewPost} className={styles.button}>add post</button>
                <button className={styles.button}>delete post</button>
            </div>


            {postsElements}

        </div>
    )
}
export default MyPosts