import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import EventForm from '../_components/EventForm'

export default function NewEventPage() {
  return (
    <div>
      <Link href="/admin/eventos" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
        <ArrowLeft size={14} /> Voltar
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Novo Evento</h2>
      <EventForm />
    </div>
  )
}
