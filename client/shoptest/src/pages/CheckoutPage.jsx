import { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)
}

function CheckoutPage() {
  const { items, clear } = useCart()
  const total = useMemo(() => items.reduce((acc, p) => acc + p.price * p.qty, 0), [items])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    // Placeholder: integrar API de pagos luego
    alert('Checkout listo para integrar pagos. Gracias!')
    clear()
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="mb-4 text-xl font-semibold">Checkout</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Nombre y Apellido</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Dirección</label>
            <input value={address} onChange={(e)=>setAddress(e.target.value)} className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900" placeholder="Calle 123, Ciudad" />
          </div>
          <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Continuar al pago</button>
        </form>
      </div>

      <aside>
        <div className="rounded-lg border border-neutral-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-semibold">Resumen de compra</h2>
          <ul className="divide-y divide-neutral-200">
            {items.map(item => (
              <li key={item.id} className="flex items-center justify-between py-2 text-sm">
                <span>{item.qty}× {item.name}</span>
                <span>{formatPrice(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default CheckoutPage


