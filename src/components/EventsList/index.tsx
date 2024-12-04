import React from 'react'
import events from '@/data/events.json'
import EventCard from '../EventCard'



type Props = {
  past?: boolean
  workshop: boolean
  count?: number;
}

const EventsList = ({ past, workshop, count }: Props) => {

  let filteredEvents = [];


  filteredEvents = events.filter(event => event.past === past)

  let reversedFilteredEvents = [...filteredEvents].reverse()

  let resultEvents = count ? reversedFilteredEvents.slice(0, count) : reversedFilteredEvents;

  return (
    <section className={`${resultEvents.length == 0 ? "hidden" : ""} py-12 sm:py-16 md:py-20`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">{workshop ? "Workshops" : past ? "Eventos passados" : "Próximos Eventos (Inscreve-te já)"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            resultEvents.map((event, index) => (
              <EventCard
                key={index}
                id={event.id}
                title={event.title}
                date={event.date}
                from={event.from}
                to={event.to}
                location={event.location}
                description={event.description}
                imageUrl={event.image}
              />))
          }
        </div>
      </div>
    </section>
  )
}

export default EventsList