import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav className='NavLinks'>
            <span>
                <img src={"Images/Logo.png"} alt="Logo"></img>
            </span>
            <div className='PageLinks'>
                <NavLink to ="/">Home</NavLink>
                <NavLink >About</NavLink>
                <NavLink to="/Shop">Shop</NavLink>
                <NavLink >Pictures</NavLink>
                <NavLink >More ...</NavLink>
            </div>
            <div className='NavIcons'>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
