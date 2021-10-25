import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)



    const addUser = () => {
        setError(null)
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello  ${name.trim()}  !`) // need to fix
            setName(" ")
        }
        else  {
            setError("Name is required!")
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
