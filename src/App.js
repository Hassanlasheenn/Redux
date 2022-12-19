import './App.css';
import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar';
import { calculateTotal } from './features/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import cartItems from './CartItems';

function App() {

  const { cartItems } = useSelector((store)=> store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])
  return (
    <main className="App">
     <Navbar />
     <CartContainer />
    </main>
  );
}

export default App;
