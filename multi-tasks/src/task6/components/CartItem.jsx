export default function CartItem({ item, dispatch }) {
  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">Price: ${item.price}</p>
        <p className="text-sm text-gray-600">Total: ${item.price * item.quantity}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
