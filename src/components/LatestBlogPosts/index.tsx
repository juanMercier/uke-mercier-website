import Image from 'next/image'
import React from 'react'

type Props = {}

const LatestBlogPosts = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Ukulele basics"
            width={400}
            height={200}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-xl font-bold mb-2">The Basics of Ukulele for Beginners</h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Learn the essentials to get started with playing the ukulele.</p>
          <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Read More</a>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Strumming patterns"
            width={400}
            height={200}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-xl font-bold mb-2">Top 5 Ukulele Strumming Patterns</h3>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Master your rhythm with these must-know strumming techniques.</p>
          <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Read More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LatestBlogPosts