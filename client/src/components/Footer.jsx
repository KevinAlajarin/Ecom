import { Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 py-6 text-sm text-neutral-600">
      <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ecom. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900">
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
          <a href="mailto:contacto@shoptest.com" className="inline-flex items-center gap-2 hover:text-neutral-900">
            <Mail className="h-4 w-4" /> contacto@shoptest.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer


