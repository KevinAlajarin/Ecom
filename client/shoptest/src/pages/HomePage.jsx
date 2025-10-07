import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PRODUCTS } from '../data/products.js'
import FilterBar from '../components/FilterBar.jsx'
import ProductList from '../components/ProductList.jsx'

function useQueryParam(name) {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search).get(name) ?? '', [search, name])
}

function HomePage() {
  const [order, setOrder] = useState('asc')
  const q = useQueryParam('q')

  return (
    <div>
      <FilterBar order={order} setOrder={setOrder} total={PRODUCTS.length} />
      <ProductList products={PRODUCTS} order={order} query={q} />
    </div>
  )
}

export default HomePage


