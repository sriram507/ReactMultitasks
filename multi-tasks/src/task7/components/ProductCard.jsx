import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2 cursor-pointer" onClick={() => navigate(`/task7/product/${product.id}`)} />
      <h3 className="font-semibold text-center">{product.title}</h3>
      <p className="mt-1 font-bold">${product.price}</p>
      <button onClick={() => add(product)} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
