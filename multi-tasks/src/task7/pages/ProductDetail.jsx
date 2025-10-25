import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { add } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => setError('Failed to load product'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!product) return null;

  return (
    <div className="p-6 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-64 object-contain mb-4" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <button onClick={() => add(product)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
}
