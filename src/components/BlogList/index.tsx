import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/data'

type Props = {
  count?: number
}

const BlogList = async ({ count }: Props) => {
  const posts = await getBlogPosts()
  const filtered = count ? posts.slice(0, count) : posts

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map(post => (
        <Link href={`/blog/${post.id}`} key={post.id} className="bg-primary-foreground rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover object-top"
          />
          <div className="flex flex-col justify-between flex-grow p-6">
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-secondary text-lg mb-4">{post.resume}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('pt-PT')}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogList
