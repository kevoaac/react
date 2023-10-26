/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons';

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <strong> - ${product.price}</strong>
              </div>
              <div>
                <AddToCartIcon />
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
