import React from "react"
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path="dialogs/"+props.id
    return (
        <div  className={styles.dialog + ' ' + styles.active}>
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

    let dialogs=[
        {id:1, name:'Stepan'},
        {id:2, name:'Federer'},
        {id:3, name:'Sergey'},
        {id:4, name:'Sasha'},
        {id:5, name:'Aleksey'}
    ]
    let dialogsElements=
        dialogs.map((dialog)=>{
        return (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
        })

    console.log(dialogsElements)

    let messages=[
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'How are you?'},
        {id:4, message:'Good bye'},
        {id:5, message:'OK'}
    ]

     let messagesElements=messages.map((message)=>{
         return (
             <Message key={message.id} message={message.message}/>
         )
     })
 console.log(messagesElements)
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