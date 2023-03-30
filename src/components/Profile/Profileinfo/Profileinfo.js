import React from "react";
import styles from "./Profileinfo.module.css";

 const ProfileInfo=(props)=>{
    return(
        <>
        <div>
            <img src={props.mainImg} alt=""></img>
        </div>
    <div className={styles.descriptionBlock}>
        <img src={props.ava} alt=""></img>
        <p>
            {props.description}
        </p>
    </div>
        </>

    )
}
export default ProfileInfo

