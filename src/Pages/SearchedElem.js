import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
const SearchedElem = () => {
    const { db, searchElem } = useContext(ProviderContext);
    return (
        <div>
            {db && (
                db.filter(item => item.name === searchElem)
            )}
        </div>
    )
}

export default SearchedElem
