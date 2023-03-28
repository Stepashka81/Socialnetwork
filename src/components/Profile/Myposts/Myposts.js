import React from "react"
import styles from "./Myposts.module.css"
import SinglePost from "./Singlepost/Singlepost"

const MyPosts = () => {
    return (

        <div>
            <p className={styles.head}>MY POSTS</p>
            <button className={styles.button}>add post</button>
            <button className={styles.button}>delete post</button>
            <SinglePost />
            <SinglePost/>
           
        </div>
    )
}
export default MyPosts