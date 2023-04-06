import React from "react";
import styles from "./Message.module.css"
import {createRef} from "react";

const Message = (props) => {

    let newMessage=createRef()
    let addMessage=()=>{
        let text=newMessage.current.value;
        alert(text)
    }


    return (
        <div className={styles.messagesBox}>
            <div>
                {props.message}
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
            <div>
                <textarea ref={newMessage} placeholder="add new message"></textarea>
            </div>

        </div>

    )
}
export default Message