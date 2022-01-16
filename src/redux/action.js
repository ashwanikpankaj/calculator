import { LOAD_ANS, LOAD_BACKSPACE, LOAD_BUTTONS, LOAD_CLEAR } from "./actiotTypes"

export const loadButton = (payload)=>{
    return {
        type:LOAD_BUTTONS,
        payload
    }
}

export const loadBackspace = (payload)=>{
    return {
        type:LOAD_BACKSPACE,
        payload
    }
}

export const loadClear = (payload)=>{
    return {
        type:LOAD_CLEAR,
        payload
    }
}

export const loadAns = (payload)=>{
    return {
        type:LOAD_ANS,
        payload
    }
}