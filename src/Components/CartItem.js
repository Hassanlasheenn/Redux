import React from 'react';
import { ChevronUp, ChevronDown } from '../Icons';
import { increase, decrease, remove } from '../features/CartSlice';
import '../sass/CartItem.scss';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {

    const dispatch = useDispatch();

  return (
    <article className="cart-item">
        <img className='cart-item--images' src={img} alt={title} />
        <div>
            <h4 className='cart-item--title'>{title}</h4>
            <h4 className="cart-item--price">${price}</h4>
            <button className='cart-item--remove'>remove</button>
        </div>
        <div>
            <button 
                className='cart-item--amount__btn'
                onClick={()=> dispatch(increase({id}))}
            >
                <ChevronUp />
            </button>
            <p className="amount">{amount}</p>
            <button 
                className='cart-item--amount__btn'
                onClick={()=> {
                    if (amount === 1){
                        dispatch(remove(id))
                    }
                    dispatch(decrease({id}))
                    }}
            >
                <ChevronDown />
            </button>
        </div>
</article>
  )
}

export default CartItem;
