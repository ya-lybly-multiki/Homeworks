import React from 'react'
import classes from './Message.module.css'
import {AlternativeDataType} from "./HW1";

function AlternativeMessage(props: AlternativeDataType) {
    return (
        <div>
            <div className={classes.message}>
                <img src={props.avatar}/>
                <div className={classes.message__container}>
                    <p className={classes.message__name}>{props.name}</p>
                    <div className={classes.message__content}>
                        <p>{props.message}</p>
                        <time>{props.time}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage;
