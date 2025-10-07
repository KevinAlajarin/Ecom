import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage.jsx'
import CartPage from './pages/CartPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import Layout from './components/Layout.jsx'
import { CartProvider } from './context/CartContext.jsx'

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </CartProvider>
  )
}

export default App
