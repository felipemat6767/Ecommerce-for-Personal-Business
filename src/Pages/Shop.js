import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import Sidebar from '../components/Sidebar';
import ProductFilt from '../filters/ProductFilt';
import ProductAll from '../filters/ProductAll';


const Shop = () => {
  const { category } = useContext(ProviderContext);


  return (
    <div className='Contenedor-Shop'>
      <Sidebar></Sidebar>
      <div className='Contenedor-Productos'>
        {(category !== "") ? <ProductFilt category={category}></ProductFilt> : <ProductAll></ProductAll>  }
      </div>
    </div>

  )
}

export default Shop
