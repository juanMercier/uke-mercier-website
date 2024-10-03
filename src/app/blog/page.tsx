import Image from 'next/image'
import Link from 'next/link'
import blogPosts from '@/data/blogPosts.json'
import UpperSection from '@/components/UpperSection'

export default function Blog() {
    return (
        <div className='pt-24 md:pt-0'>
            <UpperSection title='Blog UkeMercier' imgLocation='/classPhoto.jpg' />

            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="flex flex-col justify-between p-6 ">
                                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.resume}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('pt-PT')}</span>
                                        <Link href={`/blog/${post.id}`} className="text-accent hover:text-accent-dark font-semibold">
                                            Ler mais
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}