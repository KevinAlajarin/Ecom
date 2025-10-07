import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  totalItems: 0,
})

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(product, quantity = 1) {
    const qtyToAdd = Math.max(1, Number(quantity) || 1)
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + qtyToAdd } : p))
      }
      return [...prev, { ...product, qty: qtyToAdd }]
    })
  }

  function removeItem(productId) {
    setItems((prev) => prev.filter((p) => p.id !== productId))
  }

  function clear() {
    setItems([])
  }

  const totalItems = useMemo(() => items.reduce((acc, p) => acc + p.qty, 0), [items])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}


