import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""// need to fix with (?:)
    const spanClass = error ? s.errorSpan : ""

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={spanClass}>{error}</span>
            <button onClick={addUser}
                    className={s.floating_button}>add</button>
            <span className={s.spanCounter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
