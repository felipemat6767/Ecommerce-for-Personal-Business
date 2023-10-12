import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';

const GetProductByPrice = () => {
const {setValorMin, setValorMax, valinic, db } = useContext(ProviderContext);
const{ValorMax, ValorMin} = valinic

return (db.filter(el => el.price >= ValorMin))
}

export default GetProductByPrice
