import React, { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import { faHandPointUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const valoresiniciales = {
  ValorMin: 0,
  ValorMax: 0
}

const Sidebar = () => {
  
  const [view, setView] = useState(false);
  const { setCategory, setvalinic} = useContext(ProviderContext);
 
  const [valorinicial, setvalorinicial] = useState({valoresiniciales});

  const handleValueChange = (e) => {
    const{name, value} = e.target
    setvalorinicial({...valorinicial, [name]: value})
  }
 
  const setRange = () => {
    setView(!view)
  }

  const valores = (e) => {
      e.preventDefault()
      setvalinic(valorinicial)
      setCategory("Price")
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
            <div className='range-icon'>
              {(!view)? <FontAwesomeIcon icon={faHandPointDown} onClick={setRange}/>: <FontAwesomeIcon icon={faHandPointUp} onClick={setRange}/>}
            </div>
          </div>
          {view &&
            <li>
              <form onSubmit={valores}>
                <div className='range-input'>
                  <div className='range-input-cont'>
                    <label>Min Price</label>
                    <input name="ValorMin" value ={valorinicial.ValorMin} onChange={handleValueChange}></input>
                  </div>
                  <div className='range-input-cont'>
                    <label>Max Price</label>
                    <input onChange={handleValueChange} value ={valorinicial.ValorMax} name="ValorMax" ></input>
                  </div>
                </div>
                <button type='submit'>Filter</button>
              </form>
              <div>
                  
              </div>
            </li>}
        </div>

      </ul>
    </>
  )
}

export default Sidebar
