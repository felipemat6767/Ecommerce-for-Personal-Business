import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import Producto from '../components/Producto';
import Sidebar from '../components/Sidebar';
import GetProductByCategory from '../helpers/GetProductByCategory';
import ProductFilt from '../filters/ProductFilt';


const Shop = () => {
  const { db, category } = useContext(ProviderContext);
 
  
  return (
    <div className='Contenedor-Shop'>
      <Sidebar></Sidebar>
      <div className='Contenedor-Productos'>
        {db.map((el) => (
          <article className='Producto'>
            <Producto el={el} key={el.key}
            ></Producto>
          </article>
        ))
        }
      
      <ProductFilt category={category}></ProductFilt>
  
      </div>
    </div>

  )
}

export default Shop
