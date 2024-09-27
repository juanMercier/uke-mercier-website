import Image from 'next/image'
import { Calendar, MapPin, Clock } from 'lucide-react'

export default function Events() {
  return (
    <>
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Image
          src="/groupPhotoPark.jpg"
          alt="UkeMercier events"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Events</h1>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">UkeInParque: Summer Edition</h3>
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">July 15, 2023</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">2:00 PM - 5:00 PM</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">Parque Eduardo VII, Lisbon</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Join us for an afternoon of ukulele music in the park. Bring your ukulele and enjoy playing with fellow enthusiasts!</p>
              <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Learn More</a>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Ukulele Workshop: Fingerpicking Techniques</h3>
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">August 5, 2023</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">10:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2 text-tertiary" />
                <span className="text-gray-600 text-sm">UkeMercier Studio, Lisbon</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Enhance your ukulele skills with this workshop focused on fingerpicking techniques. Suitable for intermediate players.</p>
              <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Event Calendar</h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center">
              View our full event calendar to stay up-to-date with all UkeMercier activities and workshops.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <p className="text-center text-gray-500">Interactive Calendar Coming Soon!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Join Our Ukulele Community</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Don't miss out on our exciting events and workshops. Sign up for our newsletter to stay informed about upcoming activities!
          </p>
          <a href="/contact" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </>
  )
}