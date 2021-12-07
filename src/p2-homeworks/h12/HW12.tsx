import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, StateType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, StateType>(state => state.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (value:StateType) => dispatch(changeThemeC(value))



    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio name={"radio"}
                        options={themes}
                        onChangeOption={onChangeCallback}
                        value={themes}
            />

            <hr/>
        </div>
    );
}

export default HW12;
