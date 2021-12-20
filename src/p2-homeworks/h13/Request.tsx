import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {Api} from "./api";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type ResponseType = {
    data: {
        ErrorText:string
        info:string
    }
    status:number
}

const Request = () => {
    const [checked,setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<ResponseType>({
        data:{
            ErrorText:'+_-',
            info:'-_-'
        },
        status:0
    })

    const onChangeChecked = () => {
        Api.requestApi(checked).then(res => {
            setResponse(res)
        })
            .catch(error => {
               setResponse({...error.response})
            })
    }

    return (
        <div>
            <SuperCheckbox style={{marginLeft:'50px'}} onChangeChecked={setChecked} checked={checked}/>
            <SuperButton onClick={onChangeChecked} /> Api
            <p>Status: {response.data.ErrorText}</p>
            <p>Info: {response.data.info}</p>
        </div>
    );
};

export default Request;