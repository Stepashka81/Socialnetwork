import React from "react";
import styles from "./Singlepost.module.css"


const SinglePost = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://sportishka.com/uploads/posts/2021-12/thumbs/1638875041_4-sportishka-com-p-rodzher-federer-sport-krasivo-foto-4.jpg" alt=""></img>
            <p>{props.message}</p>
            <button>👍</button>
            <button>👎</button>
        </div>
    )
}
export default SinglePost