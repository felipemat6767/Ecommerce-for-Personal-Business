import React, { useContext } from 'react'
import ProdPage from '../Pages/ProdPage'
import { useModal } from '../helpers/useModal';
import Modal from './Modals';
import { ProviderContext } from '../Provider/Provider';

const Producto = ({ el }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const { name, type, price, quantity, img_name } = el
    const { agregaritem } = useContext(ProviderContext);
    const addtoshop = () => {
        agregaritem(el)
    }
   
    return (
        <div className=''>
            <article className='Prod-Img'>
                <img src={`../Images/ImagesProd/${img_name}.jpeg`} alt=''></img>
            </article>
            <article>
                <h3>{name}</h3>
                <h3>{type}</h3>
                <h3>{price}</h3>
            </article>

            <button onClick={openModal} >Abrir Modal</button>
            <button onClick={addtoshop}>ADD</button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <ProdPage el={el}></ProdPage>
            </Modal>
        </div>

        
    )
}

export default Producto
