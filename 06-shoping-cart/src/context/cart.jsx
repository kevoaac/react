/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma es usando structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity++
      return setCart(newCart)
    }

    // producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart, addToCart, clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}