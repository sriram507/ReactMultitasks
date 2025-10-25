import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <Link to="/" className="font-bold text-lg">React Multi-Task App</Link>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="px-2 py-1 border rounded">
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <Link to="/task7/cart" className="px-2 py-1 border rounded">
          Cart({cart.items.length})
        </Link>
        {isLoggedIn ? (
          <button onClick={logout} className="px-2 py-1 border rounded">Logout</button>
        ) : (
          <Link to="/task7/login" className="px-2 py-1 border rounded">Login</Link>
        )}
      </div>
    </nav>
  );
}
