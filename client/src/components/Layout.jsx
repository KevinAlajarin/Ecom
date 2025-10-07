import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />
      <main className="flex-1 container py-6">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


