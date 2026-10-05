import { getEvents } from '@/lib/data'
import EventCard from '../EventCard'

type Props = {
  past?: boolean
  workshop: boolean
  count?: number
}

const EventsList = async ({ past, workshop, count }: Props) => {
  if (workshop) return null

  const events = await getEvents()
  const filtered = events.filter(event => event.past === past)
  const reversed = [...filtered].reverse()
  const result = count ? reversed.slice(0, count) : reversed

  if (result.length === 0) return null

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          {past ? 'Eventos passados' : 'Próximos Eventos (Inscreve-te já)'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {result.map((event, index) => (
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsList
