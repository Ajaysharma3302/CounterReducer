import {useReducer} from 'react'

const reducer = (state,action)=>{
switch(action.type){
    case "INCREMENT_COUNT":
    return state + 1
    case "DECREMENT_COUNT":
        return state-1
        default:
            throw new Error ("Action Type is invalid")
}
}

function ReducerCounter(){
    const [state,dispatch] = useReducer(reducer,0)

    let handleIncrement = ()=>
         dispatch({type:"INCREMENT_COUNT"})
    
let handleDecrement = ()=>dispatch({type:"DECREMENT_COUNT"})
    return(
        <>
        <h1>{state}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick= {handleDecrement}>DECREMENT</button>
        </>
    )
}


export default ReducerCounter