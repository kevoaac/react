/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer' style={{
      fontSize: '.75 rem', maxHeight: 100, overflow: 'scroll'
    }}>
      {JSON.stringify(filters, null, 2)} < br />
      {JSON.stringify(cart, null, 2)}
      {/* {JSON.stringify('Cantidad de elementos distintos: ' + cart.length, null, 2)} */}
    </footer >
  )
}