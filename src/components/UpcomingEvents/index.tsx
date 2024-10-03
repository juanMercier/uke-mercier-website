import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'


type Props = {}

const UpcomingEvents = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Próximos Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">UkeInParque: Summer Edition</h3>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">July 15, 2023</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">2:00 PM - 5:00 PM</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">Parque Eduardo VII, Lisbon</span>
          </div>
          <p className="text-secondary mb-4 text-sm sm:text-base">Join us for an afternoon of ukulele music in the park. Bring your ukulele and enjoy playing with fellow enthusiasts!</p>
          <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Learn More</a>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Ukulele Workshop: Fingerpicking Techniques</h3>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">August 5, 2023</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">10:00 AM - 12:00 PM</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 mr-2 text-tertiary" />
            <span className="text-secondary text-sm">UkeMercier Studio, Lisbon</span>
          </div>
          <p className="text-secondary mb-4 text-sm sm:text-base">Enhance your ukulele skills with this workshop focused on fingerpicking techniques. Suitable for intermediate players.</p>
          <a href="#" className="text-tertiary hover:text-teal-600 font-bold">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UpcomingEvents