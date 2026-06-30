import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')

  if (path === '/products' || path === '/kits') {
    return <ProductsPage />
  }

  return <LandingPage />
}

export default App
