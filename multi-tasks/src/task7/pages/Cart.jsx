import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, clear } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.items.map(item => <CartItem key={item.id} item={item} />)}
          </ul>
          <div className="mt-4 text-right font-bold">Total: ${cart.totalAmount}</div>
          <div className="mt-2 flex space-x-2 justify-end">
            <button onClick={clear} className="px-4 py-2 bg-red-500 text-white rounded">Clear Cart</button>
            <button onClick={() => navigate('/task7/checkout')} className="px-4 py-2 bg-green-500 text-white rounded">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
