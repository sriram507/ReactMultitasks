import { useReducer, useRef } from 'react';

const initialState = { name: '', address: '', card: '' };
function reducer(state, action) {
  switch(action.type) {
    case 'SET_NAME': return { ...state, name: action.payload };
    case 'SET_ADDRESS': return { ...state, address: action.payload };
    case 'SET_CARD': return { ...state, card: action.payload };
    case 'RESET': return initialState;
    default: return state;
  }
}

export default function Checkout() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameRef = useRef();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-3">
        <input ref={nameRef} type="text" placeholder="Name" value={state.name} onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })} className="border p-2 rounded" />
        <input type="text" placeholder="Address" value={state.address} onChange={e => dispatch({ type: 'SET_ADDRESS', payload: e.target.value })} className="border p-2 rounded" />
        <input type="text" placeholder="Card Number" value={state.card} onChange={e => dispatch({ type: 'SET_CARD', payload: e.target.value })} className="border p-2 rounded" />
        <button onClick={() => dispatch({ type: 'RESET' })} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
  );
}
