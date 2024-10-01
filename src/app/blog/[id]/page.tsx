import Image from 'next/image'
import blogPosts from '@/data/blogPosts.json'

type Props = {
  params: { id: string }
}

export default function BlogPost({ params }: Props) {

  const { id } = params;

  const post = blogPosts.find((post: any) => post.id === Number(id))

  if (!post) {
    return (
      <div className='pt-24 md:pt-0'>
        <div className="container mx-auto px-4 mt-20 py-12">
          <h1 className="text-3xl font-bold text-center">Post não encontrado</h1>
        </div>
      </div>
    )
  }

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">{new Date(post.date).toLocaleDateString('pt-PT')}</span>
          <span>Por {post.author}</span>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt={post.title}
          width={800}
          height={400}
          className="w-full rounded-lg shadow-md mb-8"
        />
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  )
}