import React from "react"
import styles from "./Myposts.module.css"
import SinglePost from "./Singlepost/Singlepost"
import {getMouseEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const MyPosts = (props) => {


    let postsElements=props.posts.map((post)=>{
        return(
            <SinglePost key={post.id} message={post.message} likes={post.likesCount}/>
        )
    })

    return (

        <div className={styles.postBlock}>
            <h3 className={styles.head}>MY POSTS</h3>
            <form>
            <textarea placeholder="insert new post"></textarea>

        <div>
            <button className={styles.button}>add post</button>
            <button className={styles.button}>delete post</button>
        </div>
            </form>

            {postsElements}
           
        </div>
    )
}
export default MyPosts