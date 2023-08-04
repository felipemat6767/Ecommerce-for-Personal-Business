import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
const SearchedElem = (name = "") => {
    const { db } = useContext(ProviderContext);
    if (name === "") {
        return []
    }
    return db && (
        db.filter(item => item.name === name)
    )
}

export default SearchedElem
