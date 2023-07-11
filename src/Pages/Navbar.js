import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useModal } from '../helpers/useModal';
import ShoppingCartSection from '../components/ShoppingCart';
import Modal from '../components/Modals';
const Navbar = () => {
    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false)
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
                <span><FontAwesomeIcon icon={faHeart} />
                <Modal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                    <ShoppingCartSection></ShoppingCartSection>
                </Modal>
                </span>
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
