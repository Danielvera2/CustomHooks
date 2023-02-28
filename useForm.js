import React, { useState } from 'react'

export const useForm = (iniForm={}) => {
    const [formState, setFormState] = useState(iniForm)
    const onInputChange=({ target })=>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const onResetForm = () => {
        setFormState( iniForm );
    }
  
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
