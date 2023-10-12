import React, { useContext, useEffect } from 'react'
import { ProviderContext } from '../Provider/Provider';
import Sidebar from '../components/Sidebar';
import ProductFilt from '../filters/ProductFilt';
import ProductAll from '../filters/ProductAll';
import ProductPriceFilt from '../filters/ProductPriceFilt';

/*{(category === "")? <ProductPriceFilt></ProductPriceFilt> : <ProductAll></ProductAll>} */
const Shop = () => {
  const { category, valorMin, setValorMin, valinic, setCategory } = useContext(ProviderContext);
  const{ValorMax, ValorMin} = valinic
  setValorMin(ValorMin)
  
  useEffect(() => {
    setValorMin(0)
    setCategory("")
  }, [])
  
  return (
    <div className='Contenedor-Shop'>
      <Sidebar></Sidebar>
      <div className='Contenedor-Productos'>
      {(ValorMin > 0 && category === "Price") ? <ProductPriceFilt></ProductPriceFilt>: (category !== "") ? <ProductFilt category={category}></ProductFilt> : <ProductAll></ProductAll>  }
      </div>
    </div>

  )
}

export default Shop
