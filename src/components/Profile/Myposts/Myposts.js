import React from "react"
import styles from "./Myposts.module.css"
import SinglePost from "./Singlepost/Singlepost"

const MyPosts = () => {
    return (

        <div>
            <p className={styles.head}>MY POSTS</p>
            <textarea placeholder="insert new post"></textarea>
            <button className={styles.button}>add post</button>
            <button className={styles.button}>delete post</button>
            <SinglePost message="Hello my friend"/>
            <SinglePost message="Let's go fishing"/>
           
        </div>
    )
}
export default MyPosts