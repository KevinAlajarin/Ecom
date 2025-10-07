import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import InfoBar from './InfoBar.jsx'

function Navbar() {
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === '/' && inputRef.current) {
      inputRef.current.value = ''
      setQuery('')
    }
  }, [location.pathname])

  function onSubmit(e) {
    e.preventDefault()
    const value = inputRef.current?.value?.trim() ?? ''
    if (!value) return
    navigate(`/?q=${encodeURIComponent(value)}`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <InfoBar />
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link to="/" className="mr-6 font-semibold tracking-tight text-2xl">Ecom</Link>
        <nav className="mx-auto hidden md:flex items-center gap-10">
          <NavLink to="/" className={({isActive})=>`text-lg font-semibold ${isActive? 'text-black':'text-neutral-800 hover:text-neutral-900'}`}>Inicio</NavLink>
          <NavLink to="/contact" className={({isActive})=>`text-lg font-semibold ${isActive? 'text-black':'text-neutral-800 hover:text-neutral-900'}`}>Contacto</NavLink>
        </nav>

        <form onSubmit={onSubmit} className="ml-auto hidden flex-1 items-center md:flex max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              ref={inputRef}
              defaultValue={query}
              onChange={(e)=>setQuery(e.target.value)}
              type="search"
              placeholder="Buscar productos..."
              className="w-full rounded-md border border-neutral-300 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100" onClick={()=>setMobileOpen(v=>!v)} aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </button>
          <NavLink to="/cart" className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100">
            <ShoppingCart className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-medium text-white">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
      {mobileOpen && (
        <div className="container md:hidden pb-3">
          <div className="flex flex-col items-center gap-3">
            <NavLink onClick={()=>setMobileOpen(false)} to="/" className={({isActive})=>`w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-center text-base font-semibold ${isActive? 'text-black':'text-neutral-800 hover:text-neutral-900'}`}>Inicio</NavLink>
            <NavLink onClick={()=>setMobileOpen(false)} to="/contact" className={({isActive})=>`w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-center text-base font-semibold ${isActive? 'text-black':'text-neutral-800 hover:text-neutral-900'}`}>Contacto</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


