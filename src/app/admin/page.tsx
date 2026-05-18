import Link from 'next/link'
import { getEvents, getBlogPosts } from '@/lib/data'

export default async function AdminDashboard() {
  const [events, posts] = await Promise.all([getEvents(), getBlogPosts()])

  const upcomingCount = events.filter(e => !e.past).length
  const pastCount = events.filter(e => e.past).length

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Eventos futuros</p>
          <p className="text-4xl font-bold text-gray-800">{upcomingCount}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Eventos passados</p>
          <p className="text-4xl font-bold text-gray-800">{pastCount}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Posts no blog</p>
          <p className="text-4xl font-bold text-gray-800">{posts.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/admin/eventos/novo" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
          <h3 className="font-semibold text-gray-800 mb-1">+ Novo Evento</h3>
          <p className="text-sm text-gray-500">Adicionar um evento ao calendário</p>
        </Link>
        <Link href="/admin/blog/novo" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
          <h3 className="font-semibold text-gray-800 mb-1">+ Novo Post</h3>
          <p className="text-sm text-gray-500">Publicar um artigo no blog</p>
        </Link>
      </div>
    </div>
  )
}
