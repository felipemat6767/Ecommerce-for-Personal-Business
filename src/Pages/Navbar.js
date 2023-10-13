import React, { useState, useContext } from 'react'
import { NavLink, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartSection from '../components/ShoppingCart';
import { ProviderContext } from '../Provider/Provider';
import GetSearchElem from '../helpers/getSearchElem';

const Navbar = () => {
    const [active, setActive] = useState(false)
    const { shoppingCart} = useContext(ProviderContext);
    const openMenu = () => {
        setActive(!active)
    }

    return (
        <nav className='NavLinks'>
            <span>
                <img src={"Images/Logo.png"} alt="Logo"></img>
            </span>
            <div className='PageLinks'>
                <NavLink to="/" className="Navlink">Home</NavLink>
                <NavLink className="Navlink">About</NavLink>
                <NavLink to="/Shop" className="Navlink">Shop</NavLink>
                <NavLink to="/Pictures" className="Navlink">Pictures</NavLink>
                <NavLink className="Navlink">More ...</NavLink>
                <GetSearchElem  className="Navlink"/>
            </div>
         
            <FontAwesomeIcon icon={faCartShopping} onClick={openMenu} className='navIcons' />
            <span className='LengthCart'>{shoppingCart.length}</span>
            <div className={`submenu-wrap ${active ? "submenu-wrap open-menu" : ""}`}>
                <div className='sub-menu'>
                    <ShoppingCartSection></ShoppingCartSection>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
