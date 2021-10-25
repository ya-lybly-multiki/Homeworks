
import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00'
}

const AlternativeData = {
    avatar: 'https://res.cloudinary.com/druw4nfh6/image/upload/w_320/v1/teenslang/r5rwf0eimj1dykumqwbp',
    name: 'Anton',
    message: 'нет, а чё это?',
    time: '22: 02'
}

export type AlternativeDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            <AlternativeMessage
                avatar={AlternativeData.avatar}
                name={AlternativeData.name}
                message={AlternativeData.message}
                time={AlternativeData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
