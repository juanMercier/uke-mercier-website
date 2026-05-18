'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { deleteEvent } from '../actions'
import type { Event } from '@/lib/types'

type DbEvent = Omit<Event, 'from' | 'to'> & { from_time: string; to_time: string }

function mapEvent(e: DbEvent): Event {
  return { ...e, from: e.from_time, to: e.to_time }
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('events').select('*').order('id')
    setEvents((data as DbEvent[] ?? []).map(mapEvent))
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: number) {
    if (!confirm('Tens a certeza?')) return
    await deleteEvent(id)
  }

  const upcoming = [...events].filter(e => !e.past).reverse()
  const past = [...events].filter(e => e.past).reverse()

  if (loading) return <p className="text-gray-500 text-sm">A carregar...</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Eventos</h2>
        <Link href="/admin/eventos/novo" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
          + Novo evento
        </Link>
      </div>

      <EventGroup title="Próximos eventos" events={upcoming} onDelete={handleDelete} />
      <EventGroup title="Eventos passados" events={past} onDelete={handleDelete} />
    </div>
  )
}

function EventGroup({ title, events, onDelete }: { title: string; events: Event[]; onDelete: (id: number) => void }) {
  if (events.length === 0) return null
  return (
    <div className="mb-10">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">{title}</h3>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Título</th>
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Data</th>
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Local</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-800">{event.title}</td>
                <td className="px-5 py-3 text-gray-500">{event.date}</td>
                <td className="px-5 py-3 text-gray-500">{event.location}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/eventos/${event.id}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                      Editar
                    </Link>
                    <button onClick={() => onDelete(event.id)} className="text-red-400 hover:text-red-600 transition-colors">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
