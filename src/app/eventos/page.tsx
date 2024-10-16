import EventsList from '@/components/EventsList'
import SecondFooter from '@/components/SecondFooter'
import UpperSection from '@/components/UpperSection'


export default function Events() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/group/groupPhotoPark.jpg' title='Eventos' />

      <EventsList past={false} workshop={false} />
      <EventsList past={true} workshop={false}/>
      <EventsList workshop={true}/>
      

      <SecondFooter title='Pronto para começar a tua jornada de ukulele?' link='/contactos' description='Estás preparado para explorar o mundo do ukulele e partilhar momentos únicos de música e convívio? Entra em contacto connosco e descobre como começar a tua aventura musical hoje mesmo!' />
    </div>
  )
}