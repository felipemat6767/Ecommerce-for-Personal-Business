import React from 'react'
import GetProductByCategory from '../helpers/GetProductByCategory'
import Producto from '../components/Producto'
import { useState } from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons'

const ProductFilt = ({ category }) => {
    const ProdbyCategory = GetProductByCategory(category)
    const [filter, setfilter] = useState(true)

    if (category !== "All") setfilter(false)

    return (
        <div>
            <div>
                {ProdbyCategory.map(el => (
                    <article className='Producto'>
                        <Producto el={el} key={el.key} />
                    </article>
                ))}
            </div>
        </div>
    )
}


export default ProductFilt
