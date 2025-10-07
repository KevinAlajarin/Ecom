import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { CreditCard, Truck, Headset, ShieldCheck, ShoppingCart } from 'lucide-react'

function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)
}

function ProductDetailPage() {
  const { id } = useParams()
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id])
  const { addItem } = useCart()
  const [selected, setSelected] = useState(0)
  const [qty, setQty] = useState(1)

  // Auto-rotación cada 4s (se define luego de calcular imágenes)

  if (!product) return <p className="text-sm text-neutral-600">Producto no encontrado.</p>

  function withBase(path) {
    if (!path) return path
    const base = import.meta.env.BASE_URL || '/'
    return path.startsWith('/') ? base + path.slice(1) : path
  }

  const images = (product.images?.length ? product.images : [product.image]).map(withBase)

  // Auto-rotación cada 4s
  useEffect(() => {
    if (!images.length) return
    const id = setInterval(() => {
      setSelected((s) => (s + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <img src={images[selected]} alt={product.name} className="w-full object-cover" />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button key={i} onClick={()=>setSelected(i)} className={`overflow-hidden rounded border ${i===selected? 'border-black' : 'border-neutral-200'}`}>
              <img src={img} alt={`${product.name} ${i+1}`} className="h-20 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <p className="mt-2 whitespace-pre-line text-sm text-neutral-600">{product.description}</p>
        <p className="mt-4 text-2xl font-bold">{formatPrice(product.price)}</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="inline-flex items-center rounded-md border border-neutral-300 bg-white text-sm">
            <button type="button" onClick={()=>setQty(q=>Math.max(1,q-1))} className="h-8 w-8 px-2 hover:bg-neutral-100">−</button>
            <div className="min-w-10 px-2 text-center tabular-nums">{qty}</div>
            <button type="button" onClick={()=>setQty(q=>q+1)} className="h-8 w-8 px-2 hover:bg-neutral-100">+</button>
          </div>
          <button onClick={()=>addItem(product, qty)} className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <ShoppingCart className="h-4 w-4" /> Agregar al carrito
          </button>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-sm font-semibold">Métodos de pago</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-700">
            <span className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-white px-3 py-1"><CreditCard className="h-4 w-4"/> Tarjeta</span>
            <span className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-white px-3 py-1"><CreditCard className="h-4 w-4"/> Mercado Pago</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white p-3"><Truck className="h-4 w-4"/> Envio gratis</div>
            <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white p-3"><Truck className="h-4 w-4"/> Envios Express</div>
            <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white p-3"><Headset className="h-4 w-4"/> Soporte 24/7</div>
            <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white p-3"><ShieldCheck className="h-4 w-4"/> Pagos seguros</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage


