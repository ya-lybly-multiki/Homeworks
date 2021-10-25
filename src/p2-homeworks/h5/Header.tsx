import React, {MouseEventHandler, useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from './Header.module.css'


function Header() {


    return (
        <nav className={style.navigation}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.link} activeClassName={style.active}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.link} activeClassName={style.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.link} activeClassName={style.active}>Junior+</NavLink>
            <div className={style.toggle}>Hover</div>
        </nav>
    )

}

export default Header
