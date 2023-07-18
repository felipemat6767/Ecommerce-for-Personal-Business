import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';

const Sidebar = () => {
  const { setCategory} = useContext(ProviderContext);
  return (
    <>
      <ul className='Sidebar'>
        <li>Browse</li>
        <li onClick={() => {setCategory("All")}}>All</li>
        <li onClick={() => {setCategory("Men")}}>Men</li>
        <li onClick={() => {setCategory("Women")}}>Women</li>
        <li onClick={() => {setCategory("Jewe")}}>.925 Jewelry</li>
      </ul>
    </>
  )
}

export default Sidebar
