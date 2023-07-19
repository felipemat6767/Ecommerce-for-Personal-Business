import React from 'react'
import GetProductByCategory from '../helpers/GetProductByCategory'
import Producto from '../components/Producto'
const ProductFilt = ({ category }) => {
    const ProdbyCategory = GetProductByCategory(category)
    console.log(category)
    return (
        ProdbyCategory.map(el => (
            <article className='Producto'>
                <Producto el={el} key={el.key} />
            </article>
        ))
    )
}


export default ProductFilt
