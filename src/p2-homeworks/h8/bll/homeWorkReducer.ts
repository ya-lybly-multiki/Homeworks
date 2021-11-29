import {InitPeople} from "../HW8";

export const homeWorkReducer = (state: InitPeople, action: GlobalType): InitPeople => { // need to fix any
    switch (action.type) {
        case 'sort': {
                let newState = [...state]
                newState.sort((a, b) => a.name > b.name ? 1 : -1)
            return action.payload === "up" ? newState : newState.reverse()

        }
        case 'check': {
            return state.filter(f => f.age > action.payload)
        }
        default:
            return state
    }
}


export type GlobalType = {type:"sort", payload: "up" | "down"}
    | {type:"check", payload:number}


