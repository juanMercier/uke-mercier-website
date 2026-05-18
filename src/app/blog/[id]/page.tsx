import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getBlogPostById } from '@/lib/data'

type Props = { params: Promise<{ id: string }> }

export default async function BlogPost({ params }: Props) {
  const { id } = await params
  const post = await getBlogPostById(Number(id))

  if (!post) notFound()

  return (
    <div className="pt-24 md:pt-0">
      <div className="container mx-auto px-4">
        <Link href="/blog" className="absolute top-28 lg:top-26 flex items-center text-tertiary hover:text-tertiary-dark text-xl transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span>Voltar ao Blog</span>
        </Link>

        <article className="max-w-5xl mx-auto px-4 py-12 lg:py-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-secondary mb-8">
            <span className="mr-4">{new Date(post.date).toLocaleDateString('pt-PT')}</span>
            <span>Por {post.author}</span>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-lg shadow-md mb-8"
          />
          <div className="text-xl mb-8 max-w-none text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}
