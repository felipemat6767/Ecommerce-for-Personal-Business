import React, { useState } from 'react'


const GetSearchElem = () => {
    const handleChange = (e) => {
        const valueSearch = e.target.value
        setValue(valueSearch)
    }
    const [first, setValue] = useState("")

    
    return (
        <>
            <input onChange={handleChange} ></input>
        </>
    )
}

export default GetSearchElem
