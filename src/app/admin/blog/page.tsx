'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { deleteBlogPost } from '../actions'
import type { BlogPost } from '@/lib/types'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    const supabase = createClient()
    const { data } = await supabase.from('blog_posts').select('*').order('id')
    setPosts((data as BlogPost[] ?? []).reverse())
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: number) {
    if (!confirm('Tens a certeza?')) return
    await deleteBlogPost(id)
  }

  if (loading) return <p className="text-gray-500 text-sm">A carregar...</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Blog</h2>
        <Link href="/admin/blog/novo" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
          + Novo post
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Título</th>
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Data</th>
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Autor</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-800">{post.title}</td>
                <td className="px-5 py-3 text-gray-500">{new Date(post.date).toLocaleDateString('pt-PT')}</td>
                <td className="px-5 py-3 text-gray-500">{post.author}</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/blog/${post.id}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-600 transition-colors">
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
