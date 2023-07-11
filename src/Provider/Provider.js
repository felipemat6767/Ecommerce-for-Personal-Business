import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export const ProviderContext = createContext()
const Provider = (props) => {
  const [db, setDb] = useState(null)
  let url = "http://localhost:4000/productos"

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
        } else {
          setDb(null);
        }
      });
  }, [url]);

  // Shopping Cart Section

  const [isProductInCart, setIsProductInCart] = useState(null)

  const [shoppingCart, setShoppingCart] = useState([])

  const agregaritem = (data) => {
    setShoppingCart([...shoppingCart, data])
  }
  const UpdateShoppingCart = (action, product) => {
    const itExists = shoppingCart.find((item) =>
      item.name === product.name &&
      item.color === product.color &&
      item.size === product.size
        ? true
        : false
    )
    if (action === 'add') {
      itExists
        ? setShoppingCart(
            shoppingCart.map((item) =>
              item.name === product.name &&
              item.color === product.color &&
              item.size === product.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          )
        : setShoppingCart([...shoppingCart, product])
    }
    if (action === 'remove' && itExists) {
      if (itExists.quantity > 1) {
        setShoppingCart(
          shoppingCart.map((item) =>
            item.name === product.name &&
            item.color === product.color &&
            item.size === product.size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        )
      } else {
        setShoppingCart(shoppingCart.filter((item) => item !== itExists))
      }
    }
    if (action === 'removeProduct') {
      setShoppingCart(shoppingCart.filter((item) => item !== itExists))
    }
  }
  return (
    <ProviderContext.Provider
      value={{
        db,
        agregaritem,
        UpdateShoppingCart,
        shoppingCart,
        setShoppingCart,
      }}>
      {props.children}
    </ProviderContext.Provider>
  )
}

export default Provider
