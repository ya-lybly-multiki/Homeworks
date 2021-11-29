export type initStateType = {
    isLoading:boolean
}

const initState:initStateType = {
    isLoading:false
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case "LOADING":
            return  {
                ...state,...action.payload
            }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean) => {
    return {
        type:"LOADING",
       payload:{isLoading}
    } as const
}

type loadingACType = ReturnType<typeof loadingAC>