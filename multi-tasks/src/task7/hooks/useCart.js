import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  calculateTotal,
} from '../redux/cartSlice';

export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Add product to cart
  const add = (product) => {
    dispatch(addToCart(product));
    dispatch(calculateTotal());
  };

  // Remove product from cart
  const remove = (id) => {
    dispatch(removeFromCart(id));
    dispatch(calculateTotal());
  };

  // Increase quantity
  const increase = (id) => {
    dispatch(increaseQuantity(id));
    dispatch(calculateTotal());
  };

  // Decrease quantity
  const decrease = (id) => {
    dispatch(decreaseQuantity(id));
    dispatch(calculateTotal());
  };

  // Clear all items
  const clear = () => {
    dispatch(clearCart());
    dispatch(calculateTotal());
  };

  return { cart, add, remove, increase, decrease, clear };
};
