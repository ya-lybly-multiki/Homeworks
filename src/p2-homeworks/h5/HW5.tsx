import React, {useState} from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {



    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
c
            <Header />

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
