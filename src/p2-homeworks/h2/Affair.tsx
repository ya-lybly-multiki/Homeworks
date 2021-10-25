import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = ( ) => {
    props.deleteAffairCallback (props.affair._id)

    }// need to fix

    return (
        <div className={styles.someClass}>

            <span className={styles.spanClass}>{props.affair.name}</span>

            <button className={styles.btn}
                onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
