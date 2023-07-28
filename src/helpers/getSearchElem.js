import React, { useContext, useState } from 'react'
import { ProviderContext } from '../Provider/Provider';


const GetSearchElem = () => {
    const { searchElem, setSearchElem } = useContext(ProviderContext);
    const handleChange = (e) => {
        const valueSearch = e.target.value
        setSearchElem(valueSearch)
    }

    return (
        <>
            <input onChange={handleChange} ></input>
        </>
    )
}

export default GetSearchElem
