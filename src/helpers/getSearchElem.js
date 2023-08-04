import React, { useContext, useState } from 'react'
import { ProviderContext } from '../Provider/Provider';
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from "query-string"
import useForm from '../hooks/useForm';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Producto from '../components/Producto';

const GetSearchElem = () => {
    const { setSearchElem } = useContext(ProviderContext);
    const navigate = useNavigate()
    const location = useLocation()

    const { q = "" } = queryString.parse(location.search)
    const [formvalues, handleinputchange] = useForm({
        searchText: q
    })

    const { searchText } = formvalues
    const productsFiltered = setSearchElem(q)

    const handlesearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }

    console.log(productsFiltered)
    console.log(searchText)
    return (
        <>
            <form onSubmit={handlesearch}>
                <input
                    type="text"
                    placeholder='Buscar un Producto'
                    className='form-control'
                    name="searchText"
                    value={searchText}
                    onChange={handleinputchange}
                />

                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>

           
        </>
    )
}

export default GetSearchElem
