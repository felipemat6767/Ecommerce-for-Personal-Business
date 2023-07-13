import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartSection from '../components/ShoppingCart';

const Navbar = () => {
    const [active, setActive] = useState(false)
   const openMenu = () => {
        setActive(!active)
        console.log(active)
   }
    return (
        <nav className='NavLinks'>
            <span>
                <img src={"Images/Logo.png"} alt="Logo"></img>
            </span>
            <div className='PageLinks'>
                <NavLink to="/">Home</NavLink>
                <NavLink >About</NavLink>
                <NavLink to="/Shop">Shop</NavLink>
                <NavLink >Pictures</NavLink>
                <NavLink >More ...</NavLink>
            </div>
            <span><FontAwesomeIcon icon={faCartShopping} /></span>
           <FontAwesomeIcon icon={faHeart} onClick={openMenu} className='navIcons'/>
           
            <div className={`submenu-wrap ${active ? "submenu-wrap open-menu" : ""}`}>
                <div className='sub-menu'>
                    <ShoppingCartSection></ShoppingCartSection>
                </div>
            </div>
           
        </nav>
    )
}

export default Navbar
