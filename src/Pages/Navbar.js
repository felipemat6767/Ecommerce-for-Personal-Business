import React, { useState, useContext } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartSection from '../components/ShoppingCart';
import { ProviderContext } from '../Provider/Provider';
const Navbar = () => {
    const [active, setActive] = useState(false)
    const { shoppingCart } = useContext(ProviderContext);
   const openMenu = () => {
        setActive(!active)
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
                <NavLink to="/Pictures">Pictures</NavLink>
                <NavLink >More ...</NavLink>
            </div>
            <span><FontAwesomeIcon icon={faHeart} /></span>
           <FontAwesomeIcon icon={faCartShopping} onClick={openMenu} className='navIcons'/>
           {shoppingCart.length}
            <div className={`submenu-wrap ${active ? "submenu-wrap open-menu" : ""}`}>
                <div className='sub-menu'>
                    <ShoppingCartSection></ShoppingCartSection>
                   
                </div>
            </div>
           
        </nav>
    )
}

export default Navbar
