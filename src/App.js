
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const ProductsPage = lazy(() => import('light/ProductPage'));

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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
