import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal } from '../redux/cartSlice';

export const useCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const add = (product) => { dispatch(addToCart(product)); dispatch(calculateTotal()); };
  const remove = (id) => { dispatch(removeFromCart(id)); dispatch(calculateTotal()); };
  const increase = (id) => { dispatch(increaseQuantity(id)); dispatch(calculateTotal()); };
  const decrease = (id) => { dispatch(decreaseQuantity(id)); dispatch(calculateTotal()); };
  const clear = () => { dispatch(clearCart()); dispatch(calculateTotal()); };

  return { cart, add, remove, increase, decrease, clear };
};
