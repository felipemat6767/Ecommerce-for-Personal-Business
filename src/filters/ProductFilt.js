import React, {useContext} from 'react'
import GetProductByCategory from '../helpers/GetProductByCategory'
import Producto from '../components/Producto'
import { ProviderContext } from '../Provider/Provider';
const ProductFilt = ({ category }) => {
    const { db } = useContext(ProviderContext);
    const ProdbyCategory = GetProductByCategory(category)
    console.log(category)
    return (
        db && (ProdbyCategory.map(el => (
            <article className='Producto'>
                <Producto el={el} key={el.key} />
            </article>
        )))
    )
}


export default ProductFilt
