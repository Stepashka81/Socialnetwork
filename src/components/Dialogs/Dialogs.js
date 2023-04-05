import React from "react"
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements= props.state.dialogs.map((dialog)=>{
        return (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
        })



     let messagesElements=props.state.messages.map((message)=>{
         return (
             <Message key={message.id} message={message.message}/>
         )
     })


    return (

        <div className={styles.dialogs}>


            <div  className={styles.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={styles.messages}>
                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs