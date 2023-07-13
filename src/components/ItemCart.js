import React from 'react'
import { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
const ItemCart = ({ item }) => {
    const { UpdateShoppingCart } = useContext(ProviderContext);
    const { name, color, img, price, quantity, img_name } = item
    console.log(img)
    return (
        <>
            <li className='item-cart'>
                <div className='cart-img'>
                    <img src={`../Images/ImagesProd/${img_name}.jpeg`} alt=''></img>
                </div>
                <div className='item-info'>
                    <div className='item-info-segment'>
                        <span>
                            {name}
                        </span>
                        <span>{price} </span>
                    </div>
                    <div className='item-info-segment'>
                        <span>
                            <button onClick={() => { UpdateShoppingCart("remove", item) }}>-
                            </button>
                            {quantity}
                            <button onClick={() => { UpdateShoppingCart("add", item) }}>+
                            </button>
                        </span>

                        <span>
                            <button onClick={() => UpdateShoppingCart("removeProduct")}></button>
                        </span>
                    </div>
                </div>
            </li>
            <hr></hr>
        </>

    )
}

export default ItemCart
