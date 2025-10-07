import { useState } from 'react'
import { toast } from 'react-toastify'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (!email || !message) {
      toast.error('Completá todos los campos')
      return
    }
    toast.success('Consulta enviada. ¡Gracias!')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-lg space-y-4">
      <div>
        <label className="mb-1 block text-sm">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="tu@email.com"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm">Consulta</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Contanos en qué podemos ayudarte"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500"
        />
      </div>
      <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Enviar</button>
    </form>
  )
}

export default ContactForm


