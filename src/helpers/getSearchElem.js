import React, { useContext, useState } from 'react'
import { ProviderContext } from '../Provider/Provider';
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from "query-string"
import useForm from '../hooks/useForm';

const GetSearchElem = () => {
    const { setSearchElem } = useContext(ProviderContext);
    const navigate = useNavigate()
    const location = useLocation()

    const { q = "" } = queryString.parse(location.search)
    const [formvalues, handleinputchange] = useForm({
        searchText: q
    })

    const { searchText } = formvalues
    const heroesfiltered =  setSearchElem(q)
  
    const handlesearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }
    return (
        <>
            <form onSubmit={handlesearch}>
                <input
                    type="text"
                    placeholder='Buscar un heroe'
                    className='form-control'
                    name="searchText"
                    value={searchText}
                    onChange={handleinputchange}
                />

                <button type="submit" className='btn btn-outline-primary mt-1'>
                    Search ...
                </button>
            </form>
        </>
    )
}

export default GetSearchElem
