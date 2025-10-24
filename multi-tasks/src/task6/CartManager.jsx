import { useReducer } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

const initialState = {
  cart: {
    items: [
      { id: 1, name: "Laptop", quantity: 1, price: 1200 },
      { id: 2, name: "Headphones", quantity: 2, price: 200 }
    ],
    totalAmount: 1600
  }
};

function cartReducer(state, action) {
  let updatedItems;
  switch(action.type) {
    case "INCREASE_QUANTITY":
      updatedItems = state.cart.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      break;
    case "DECREASE_QUANTITY":
      updatedItems = state.cart.items
        .map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0);
      break;
    case "REMOVE_ITEM":
      updatedItems = state.cart.items.filter(item => item.id !== action.payload);
      break;
    case "CLEAR_CART":
      updatedItems = [];
      break;
    default:
      updatedItems = state.cart.items;
  }

  const total = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { cart: { items: updatedItems, totalAmount: total } };
}

export default function CartManager() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">🛒 Shopping Cart</h1>

        {state.cart.items.length === 0 && (
          <p className="text-gray-500 text-center mb-4">Cart is empty.</p>
        )}

        <ul className="divide-y divide-gray-200">
          {state.cart.items.map(item => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </ul>

        <CartSummary cart={state.cart} dispatch={dispatch} />
      </div>
    </div>
  );
}
