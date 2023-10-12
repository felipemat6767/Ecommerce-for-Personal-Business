import React, {useContext} from 'react'
import Producto from '../components/Producto'
import { ProviderContext } from '../Provider/Provider';
import GetProductByPrice from '../helpers/getProductByPrice';

const ProductPriceFilt = () => {
    const { db } = useContext(ProviderContext);
    const ProdByPrice= GetProductByPrice()
    
    return (
        db && (ProdByPrice.map(el => (
            <article className='Producto'>
                <Producto el={el} key={el.key} />
            </article>
        )))
    )
}

export default ProductPriceFilt
