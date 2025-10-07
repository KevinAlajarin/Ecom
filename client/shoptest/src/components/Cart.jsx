import { useCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'

function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)
}

function Cart() {
  const { items, removeItem, clear } = useCart()
  const total = items.reduce((acc, p) => acc + p.price * p.qty, 0)

  if (items.length === 0) {
    return <p className="text-sm text-neutral-600">No hay productos en el carrito.</p>
  }

  return (
    <div className="space-y-4">
      <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 p-3">
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="h-14 w-14 rounded object-cover" />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">{item.qty} x {formatPrice(item.price)}</p>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)} className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm hover:bg-neutral-100">
              <Trash2 className="h-4 w-4" /> Quitar
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-semibold">Total: {formatPrice(total)}</p>
        <div className="flex items-center gap-2">
          <button onClick={clear} className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm hover:bg-neutral-100">Vaciar carrito</button>
          <Link to="/checkout" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Continuar con el pago</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart


