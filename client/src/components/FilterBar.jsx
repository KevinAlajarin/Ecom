function FilterBar({ order, setOrder, total }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <p className="text-sm text-neutral-600">{total} producto/s</p>
      <div className="inline-flex items-center gap-2 text-sm">
        <label className="text-neutral-700">Ordenar:</label>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900"
        >
          <option value="asc">Precio: Menor a Mayor</option>
          <option value="desc">Precio: Mayor a Menor</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar


