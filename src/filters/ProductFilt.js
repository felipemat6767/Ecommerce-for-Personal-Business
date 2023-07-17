import React from 'react'
import GetProductByCategory from '../helpers/GetProductByCategory'
import Producto from '../components/Producto'

const ProductFilt = ({ category }) => {
    const ProdbyCategory = GetProductByCategory(category)
    console.log(ProdbyCategory)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {ProdbyCategory.map(el => (
                    <Producto el={el} key={el.key} />
                ))}
            </div>
        </>
    )
}


export default ProductFilt
