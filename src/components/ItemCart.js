import React from 'react'
import { useContext } from 'react'
import { ProviderContext } from '../Provider/Provider';
const ItemCart = ({ item }) => {
    const {UpdateShoppingCart} = useContext(ProviderContext);
    const { name, color, img, price, quantity } = item
    return (
        <li>
            <div>
                <img src={img} alt="img"></img>
            </div>
            <ul>
                <li className="font-bold text-start">
                    {name} - {color}
                </li>
                <li>{price} </li>
                <li>
                    <button onClick={() => {UpdateShoppingCart("remove", item)} }>+
                    </button>
                    {quantity}
                    <button onClick={() => {UpdateShoppingCart("add", item)} }>+
                    </button>
                </li>
            </ul>
        </li>
    )
}

export default ItemCart
