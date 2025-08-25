
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const ProductsPage = lazy(() => import('light/ProductPage'));
const ProductRoutes = lazy(() => import('light/ProductRoutes'));

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
          <Route path="/test" element={<ProductsPage />} />
          <Route path="/products/*" element={
          <Suspense fallback={<p>Loading Products…</p>}>
            <ProductRoutes />
          </Suspense>
        } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
