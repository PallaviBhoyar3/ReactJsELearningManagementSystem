import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemCart, clearCart } from '../redux/slices/cartSlice';

export default function CartList(): JSX.Element {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart List</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.product} - {item.price}
                <button
                  onClick={() => dispatch(removeItemCart(item.product))}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearCart())} style={{ color: 'blue' }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
