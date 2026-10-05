import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogForm from '../_components/BlogForm'

export default function NewBlogPage() {
  return (
    <div>
      <Link href="/admin/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
        <ArrowLeft size={14} /> Voltar
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Novo Post</h2>
      <BlogForm />
    </div>
  )
}
