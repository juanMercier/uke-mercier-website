import EventsList from '@/components/EventsList'
import UpperSection from '@/components/UpperSection'


export default function Events() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/group/groupPhotoPark.jpg' title='Eventos' />

      <EventsList past={false} workshop={false} />
      <EventsList past={true} workshop={false}/>
      <EventsList workshop={true}/>
      

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Junta-te à nossa comunidade de ukulele</h2>
          <a href="/contactos" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Contacta-nos hoje
          </a>
        </div>
      </section>
    </div>
  )
}