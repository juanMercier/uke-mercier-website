import UpcomingEvents from '@/components/UpcomingEvents'
import UpperSection from '@/components/UpperSection'
import Image from 'next/image'

export default function Events() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/group/groupPhotoPark.jpg' title='Eventos' />

      <UpcomingEvents />

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Event Calendar</h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <p className="text-secondary mb-4 text-sm sm:text-base text-center">
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
          <a href="/contactos" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </div>
  )
}