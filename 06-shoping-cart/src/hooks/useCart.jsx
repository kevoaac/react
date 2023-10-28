import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart can only be used inside CartProvider, please declare it in a higher level')
  }
  return context
}