import React from "react"
import styles from "./Myposts.module.css"
import SinglePost from "./Singlepost/Singlepost"

const MyPosts = (props) => {

    let posts=[
        {id:1,message:"Let's start fishing",likesCount:10},
        {id:2,message:"I love tennis",likesCount:1},
        {id:3,message:"Hello world",likesCount:2},
        {id:4,message:"Hello world",likesCount:2},
        {id:5,message:"Hello world",likesCount:2},
        {id:6,message:"Hello world",likesCount:2},
        {id:7,message:"Hello world",likesCount:2}
    ]

    let postsElements=posts.map((post)=>{
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