function InfoBar() {
  const items = [
    'Envio gratis',
    '30 dias de garantia',
    'En la puerta de tu casa en 7 dias habiles',
  ]
  const sequence = Array.from({ length: 15 }, (_, i) => items[i % items.length])
  return (
    <div className="w-full overflow-hidden border-b border-neutral-900 bg-black text-white">
      <div className="container">
        <div className="ticker relative overflow-hidden py-2 text-base font-semibold tracking-wide">
          <div className="ticker-track-4 flex">
            {sequence.map((t, i) => (
              <span key={`a-${i}`} className="mx-8 whitespace-nowrap">{t}</span>
            ))}
            {sequence.map((t, i) => (
              <span key={`b-${i}`} className="mx-8 whitespace-nowrap">{t}</span>
            ))}
            {sequence.map((t, i) => (
              <span key={`c-${i}`} className="mx-8 whitespace-nowrap">{t}</span>
            ))}
            {sequence.map((t, i) => (
              <span key={`d-${i}`} className="mx-8 whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar


