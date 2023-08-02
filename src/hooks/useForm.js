import React, { useState } from 'react'

const useForm = ((inicialstate = {}) => { 
    const [values, setFormValues] = useState(inicialstate)
    const reset = () => {
        setFormValues(inicialstate)
    }
    
    const handleinputchange = ({ target }) => {
        setFormValues({
            ...values,
            [target.name]: target.value
        })}
    return[values, handleinputchange, reset]
})

export default useForm
