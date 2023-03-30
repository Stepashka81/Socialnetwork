import React from "react"
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path="dialogs/"+props.id
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src={props.src} alt=""></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}


const  Message=(props)=>{
    return(
        <div className={styles.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    return (

        <div className={styles.dialogs}>

            <div className={styles.dialogsItems}>

                <DialogItem name="Stepan" id="1"/>
                <DialogItem name="Federer" id="2" src="https://sportishka.com/uploads/posts/2021-12/thumbs/1638875041_4-sportishka-com-p-rodzher-federer-sport-krasivo-foto-4.jpg"/>

            </div>


            <div className={styles.messages}>
               <Message message="Hello"/>
                <Message message="Good bye"/>

            </div>

        </div>
    )
}

export default Dialogs