import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchedElem from '../Pages/SearchElem';
import Producto from '../components/Producto';

const ProdSearched = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const elementSearched = query.get("searchText")
  const productsFiltered = SearchedElem(elementSearched)
  
  return (
    <div className='Contenedor-Search'>
     <h4>{`Restultados para: ${elementSearched}`}</h4>
      <div className='Contenedor-Productos-Searched'>
        {(elementSearched === '')
          ? <div className="">No se ingreso ningun elemento de busqueda</div>
          : (productsFiltered.length === 0)
          && <div className="">No hay Resultados para: {elementSearched} </div>}
        {productsFiltered.map(item => {
          return (<Producto key={item.id}
            el={item}
          />)
        })}
      </div>
    </div>
  )
}

export default ProdSearched
