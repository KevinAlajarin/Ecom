import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()
  function withBase(path) {
    if (!path) return path
    const base = import.meta.env.BASE_URL || '/'
    return path.startsWith('/') ? base + path.slice(1) : path
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <button onClick={()=>navigate(`/product/${product.id}`)} className="block w-full text-left">
        <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
          <img src={withBase(product.image)} alt={product.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
        </div>
      </button>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-medium">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-base font-semibold">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-md border border-neutral-300 bg-white text-sm">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-8 w-8 select-none px-2 hover:bg-neutral-100"
                aria-label="Disminuir"
              >
                −
              </button>
              <div className="min-w-10 px-2 text-center tabular-nums">{qty}</div>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="h-8 w-8 select-none px-2 hover:bg-neutral-100"
                aria-label="Aumentar"
              >
                +
              </button>
            </div>
            <button onClick={() => addItem(product, qty)} className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm hover:bg-neutral-100">
              <ShoppingCart className="h-4 w-4" /> Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


