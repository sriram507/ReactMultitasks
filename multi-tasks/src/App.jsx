import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './task7/redux/store';
import { AuthProvider } from './task7/context/AuthContext';
import { ThemeProvider } from './task7/context/ThemeContext';
import ErrorBoundary from './task7/components/ErrorBoundary';
import IndexPage from './indexpage/IndexPage';

// Task 7 Pages
import Navbar from './task7/components/Navbar';
import Home from './task7/pages/Home';
import Cart from './task7/pages/Cart';
import ProductDetail from './task7/pages/ProductDetail';
import Checkout from './task7/pages/Checkout';
import Login from './task7/pages/Login';

// Other tasks placeholders
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';
import Task4 from './task4/Task4';
import Task5 from './task5/Task5';
import Task6 from './task6/CartManager';

function ProtectedRoute({ children }) {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  return isLoggedIn ? children : <Navigate to="/task7/login" />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <ErrorBoundary>
              <Routes>
                {/* Landing page with all tasks (no navbar) */}
                <Route path="/" element={<IndexPage />} />

                {/* Task 1-6 routes */}
                <Route path="/task1" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
                <Route path="/task3" element={<Task3 />} />
                <Route path="/task4" element={<Task4 />} />
                <Route path="/task5" element={<Task5 />} />
                <Route path="/task6" element={<Task6 />} />

                {/* Task 7 routes (with navbar) */}
                <Route
                  path="/task7/*"
                  element={
                    <>
                      <Navbar />
                      <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                        <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                        <Route path="login" element={<Login />} />
                      </Routes>
                    </>
                  }
                />

                {/* Redirect unknown routes to home */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ErrorBoundary>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
