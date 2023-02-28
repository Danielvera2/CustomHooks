import { useState } from "react"

export const useCounter = (iniValue = 10) => {

    const [counter, setCounter] = useState(iniValue)

    const increment = (value = 1)=>{
        setCounter( (current) => current + value)
    }
    const decrement = (value = 1)=>{
        if (counter === 0) return;
        setCounter( (current) => current - value)
    }
    const Reset = ()=>{
        setCounter(iniValue)
    }
    return {
        counter,
        increment,
        decrement,
        Reset
    }
}