import { useContext, useState } from 'react'
import { useEffect } from 'react'
import ItemCart from './ItemCart';
import { ProviderContext } from '../Provider/Provider';
const ShoppingCartSection = () => {
    const { shoppingCart, UpdateShoppingCart } = useContext(ProviderContext);
    const [TotalValue, setTotalValue] = useState(0)
    useEffect(() => {
        setTotalValue(shoppingCart.map((item) => {
            let result = item.quantity * item.price
            return result
        })
            .reduce((a, b) => a + b, 0)
        )
    }, [shoppingCart])

    return (
        <div className="ShoppingCart">
            <h4>Your Cart</h4>
            {shoppingCart.length > 0 ? (
                <>
                    {
                        shoppingCart.map((item) => {
                            return (
                                <ItemCart
                                    key={item.id}
                                    item={item}
                                    UpdateShoppingCart={UpdateShoppingCart}
                                />
                            )
                        })}

                </>
            ) : (
                <div className="">
                    Empty Cart
                </div>
            )
            }
            <div>
                <ul
                    className>
                    <li>
                        <p>
                            TOTAL:{' '}
                            {TotalValue.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })}{' '}
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default ShoppingCartSection