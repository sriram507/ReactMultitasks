export default function CartSummary({ cart, dispatch }) {
  return (
    <div className="mt-4 flex flex-col space-y-3">
      <div className="text-lg font-semibold text-right">
        Total Amount: ${cart.totalAmount}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
