import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchedElem from '../Pages/SearchElem';
import Producto from '../components/Producto';

const ProdSearched = ({ }) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQuery()
    const elementSearched = query.get("searchText")
    const productsFiltered = SearchedElem(elementSearched)
    return (
        <div className='col-7'>
              <h4>Heroes Filtrados</h4>
              {(elementSearched === '' ) 
              ? <div className='alert alert-info'>Buscar un Heroe</div>
              : (productsFiltered.length === 0) 
                && <div className='alert alert-danger'>No hay Resultados {elementSearched} </div>} 
              {productsFiltered.map(item => {
                return(<Producto key= {item.id}
                  el = {item}
                  /> ) 
              })}
          </div>

    )
}

export default ProdSearched
