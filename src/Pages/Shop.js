import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import Producto from '../components/Producto';


const Shop = () => {
  const { db } = useContext(ProviderContext);

  return (
    <div className='Contenedor-Shop'>
      
      <div className='Contenedor-Productos'>
        {db && (db.map((el) => (
          <article className='Producto'>
            <Producto el={el} key={el.key}
            ></Producto>
          </article>
          
        )))}
      </div>
    </div>

  )
}

export default Shop
