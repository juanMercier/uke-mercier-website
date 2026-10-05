import Link from 'next/link'
import { logout } from './actions'

export const dynamic = 'force-dynamic'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-56 bg-gray-900 text-gray-100 flex flex-col py-8 px-4 fixed h-full">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">UkeMercier</p>
          <h1 className="text-lg font-bold">Admin</h1>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <Link href="/admin" className="px-3 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/eventos" className="px-3 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors">
            Eventos
          </Link>
          <Link href="/admin/blog" className="px-3 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors">
            Blog
          </Link>
          <Link href="/admin/cifras" className="px-3 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors">
            Cifras
          </Link>
        </nav>

        <form action={logout}>
          <button className="w-full px-3 py-2 rounded-lg hover:bg-gray-800 text-sm text-gray-400 hover:text-gray-100 transition-colors text-left">
            Sair
          </button>
        </form>
      </aside>

      <main className="ml-56 flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
