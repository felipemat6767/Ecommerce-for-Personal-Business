import React from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import queryString from "query-string"
import useForm from '../hooks/useForm';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Producto from '../components/Producto';
import SearchedElem from '../Pages/SearchElem';

const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
        navigate({ pathname, search: `?${createSearchParams(params)}` });
};
const GetSearchElem = () => {

    const location = useLocation()
    const navigateSearch = useNavigateSearch();
    const { q = "" } = queryString.parse(location.search)
    const [formvalues, handleinputchange] = useForm({
        searchText: q
    })
    
    const { searchText } = formvalues
    const productsFiltered = SearchedElem(q)
    console.log(searchText)
    const handlesearch = (e) => {
        e.preventDefault()
        navigateSearch('/ProdSearched', { searchText });
    }
    console.log(productsFiltered)
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
