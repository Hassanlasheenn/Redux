import React from 'react';
import '../sass/CartContainer.scss';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/CartSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((store)=> store.cart);

    if( amount < 1 ) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className="cart--empty">is currently empty</h4>
               </header> 
            </section>
        )
    }

  return (
    <section className='cart'>
        <header>
            <h2 className='cart--header'>your items</h2>
        </header>
        <div className='cart--aside'>
            <div>
                {cartItems.map((item) => {
                    return (
                        <CartItem key={item.id} {...item} />
                    )
                })}
            </div>

            <footer>
                <div className='cart--total'>
                    <h4>
                        total: <span>{total.toFixed(2)}</span>
                    </h4>
                </div>
                <button 
                    className='cart--clear'
                    onClick={() => dispatch(clearCart())}
                >
                    <span>clear</span>
                </button>
            </footer>
        </div>
    </section>
  )
}

export default CartContainer;
