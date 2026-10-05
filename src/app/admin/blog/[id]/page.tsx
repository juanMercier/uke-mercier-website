import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getBlogPostById } from '@/lib/data'
import BlogForm from '../_components/BlogForm'

type Props = { params: Promise<{ id: string }> }

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params
  const post = await getBlogPostById(Number(id))
  if (!post) notFound()

  return (
    <div>
      <Link href="/admin/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
        <ArrowLeft size={14} /> Voltar
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Editar Post</h2>
      <BlogForm post={post} />
    </div>
  )
}
