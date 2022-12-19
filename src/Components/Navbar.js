import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcons } from '../Icons';
import '../sass/Navbar.scss';

const Navbar = () => {
  
  const { amount } = useSelector((store)=>store.cart);

  return (
    <nav>
      <div className='nav-bar'>
        <h3>Redux Shopping Cart</h3>
        <div className='nav-bar--container'>
          <CartIcons />
          <div className='nav-bar--container__amount-cont'>
              <p className='nav-bar--container__amount-cont--text'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;