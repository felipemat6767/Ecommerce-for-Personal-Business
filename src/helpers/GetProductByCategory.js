
import { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';

const GetProductByCategory = (category) => {
    const { db } = useContext(ProviderContext);
    
    return (db.filter(el => el.category === category))
    
}

export default GetProductByCategory
