
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// will work when we setup the REMOTE app MFE
const ProductsPage = lazy(() => import('products/ProductsPage'));
const CartPage = lazy(() => import('cart/CartPage'));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 12, padding: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Suspense fallback={<p>Loading…</p>}>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
