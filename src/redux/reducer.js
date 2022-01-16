import { LOAD_ANS, LOAD_BACKSPACE, LOAD_BUTTONS, LOAD_CLEAR } from "./actiotTypes"

const iniState = {
    number:"",
    ans:""
}

export const reducer = (state=iniState,{payload,type})=>{
    switch(type){
        case LOAD_BUTTONS:{
            return{
                ...state,
                number:state.number.concat(payload),
                ans:""
            }
        }
        case LOAD_ANS:{
            try{
                return {
                    ...state,
                    ans : eval(state.number).toString()
                }
            }
            catch(err){
                return {
                    ...state,
                    ans:"Error"
                }

            }
         
        }
        case LOAD_CLEAR:{
            return {
                ...state,
                ans:"",
                number:""
            }
        }
        case LOAD_BACKSPACE:{
            return {
                ...state,
                number:(state.number).slice(0,-1),
                    ans:""
            }
        }
        default : return state
    }
}