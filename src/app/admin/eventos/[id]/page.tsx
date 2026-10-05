import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/data'
import EventForm from '../_components/EventForm'

type Props = { params: Promise<{ id: string }> }

export default async function EditEventPage({ params }: Props) {
  const { id } = await params
  const event = await getEventById(Number(id))
  if (!event) notFound()

  return (
    <div>
      <Link href="/admin/eventos" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
        <ArrowLeft size={14} /> Voltar
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Editar Evento</h2>
      <EventForm event={event} />
    </div>
  )
}
