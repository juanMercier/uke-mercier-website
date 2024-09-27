import Image from 'next/image'
import { Book, Music, Video } from 'lucide-react'

export default function Recursos() {
  return (
    <>
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Ukulele resources"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Resources</h1>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Chord Reader Tool</h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center">
              Easily read and play chords for your favorite ukulele songs with our interactive chord reader.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center text-gray-500">Interactive Chord Reader Coming Soon!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <Book className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center">Ukulele Basics</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Learn the fundamentals of ukulele playing, including chords, strumming patterns, and basic music theory.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <Music className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center">Song Tutorials</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Step-by-step guides to playing popular songs on the ukulele, with chord charts and strumming patterns.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <Video className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center">Video Lessons</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">Watch our collection of video tutorials covering various aspects of ukulele playing and technique.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Latest Blog Posts</h2>
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
    </>
  )
}