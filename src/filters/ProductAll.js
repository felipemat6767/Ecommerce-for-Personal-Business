import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import Producto from '../components/Producto';
const ProductAll = () => {
    const { db } = useContext(ProviderContext);
    return (
        db.map((el) => (
            <article className='Producto'>
                <Producto el={el} key={el.key}
                ></Producto>
            </article>
        ))
    )
}

export default ProductAll
