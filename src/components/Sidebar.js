import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
const Sidebar = () => {
  const [view, setView] = useState(false);
  const { setCategory } = useContext(ProviderContext);

  const setRange = () => {
    setView(!view)
  }
  return (
    <>
      <ul className='Sidebar'>
        <li>Browse</li>
        <li onClick={() => { setCategory("") }}>All</li>
        <li onClick={() => { setCategory("Men") }}>Men</li>
        <li onClick={() => { setCategory("Women") }}>Women</li>
        <li onClick={() => { setCategory("Jewe") }}>.925 Jewelry</li>
        <div className='range'>
          <div className= 'range-cont'>
            <span>Range </span>
            <div className='range-icon' >
              <FontAwesomeIcon icon={faTrash} onClick={setRange} />
            </div>
          </div>
          {view &&
            <li>
              <div className='range-input'>
                <div className='range-input-cont'>
                  <label>Min Price</label>
                  <input></input>
                </div>
                <div className='range-input-cont'>
                  <label>Min Price</label>
                  <input></input>
                </div>
              </div>
            </li>}
        </div>

      </ul>
    </>
  )
}

export default Sidebar
