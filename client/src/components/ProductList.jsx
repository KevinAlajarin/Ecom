import { useMemo } from 'react'
import ProductCard from './ProductCard.jsx'

function ProductList({ products = [], order = 'asc', query = '' }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const base = q ? products.filter(p => p.name.toLowerCase().includes(q)) : products
    const sorted = [...base].sort((a, b) => (order === 'desc' ? b.price - a.price : a.price - b.price))
    return sorted
  }, [products, order, query])

  if (filtered.length === 1) {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <ProductCard product={filtered[0]} />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductList


