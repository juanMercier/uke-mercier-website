import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Book, Calendar } from 'lucide-react'
import EventsList from '@/components/EventsList'
import FreeMonth from '@/components/FreeMonth'
import AnimatedButton from '@/components/AnimatedButton'
import SecondFooter from '@/components/SecondFooter'
import BlogList from '@/components/BlogList'

export default function Home() {
  return (
    <>
      <section className="hidden relative h-screen sm:flex items-center justify-center pt-24 md:pt-0">
        <Image
          src="/ukulele/UkuleleDeitado.jpg"
          alt="Ukulele on a beautiful beach"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Aprende, Toca e Aproveita Ukulele em Lisboa</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Junta-te a UkeMercier para uma jornada inesquecível</p>
          <AnimatedButton backgroundColor="accent" textColor="white" text='Começa a Aprender' link='/aulas' />
        </div>
      </section>

      <section className="relative h-screen flex sm:hidden items-center justify-center">
        <Image
          src="/ukulele/verticalUke.jpg"
          alt="Ukulele on a beautiful beach"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Aprende Ukulele em Lisboa</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Junta-te a UkeMercier para uma jornada inesquecível</p>
          {/* <Link href="/aulas" className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Começa a Aprender <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link> */}
          <AnimatedButton backgroundColor="accent" textColor="white" text='Começa a Aprender' link='/aulas' />
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Bem-vindo a UkeMercier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link href='/sobre' className="bg-primary-foreground p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <Music className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Aulas Especializadas</h3>
              <p className="text-secondary text-lg sm:text-base">Aprende com o experiente professor Carlos Mercier e descubra a alegria de tocar ukulele.</p>
            </Link>
            <Link href='/explorar' className="bg-primary-foreground p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <Book className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Explora e Aprende</h3>
              <p className="text-secondary text-lg sm:text-base">Acede à nossa ferramenta de leitura de cifras, conhece melhor a história e tipos de ukulele e muito mais.</p>
            </Link>
            <Link href='/eventos' className="bg-primary-foreground p-6 sm:p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Eventos da Comunidade</h3>
              <p className="text-secondary text-lg sm:text-base">Junta-te aos nossos eventos UkeInParque e conecta-te com outros entusiastas de ukulele.</p>
            </Link>
          </div>
        </div>
      </section>

      <FreeMonth />
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/perfil/perfilInParque.jpg"
                alt="Carlos Mercier teaching"
                width={200}
                height={200}
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 lg:pl-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Conhece o professor: Carlos Mercier</h2>
              <p className="text-secondary mb-4 sm:mb-6 text-lg ">Carlos Mercier é um apaixonado professor de ukulele com mais de 5 anos de experiência. O seu estilo de ensino único concentra-se em tornar a aprendizem divertida, acessível e livre de stress para alunos de todos os níveis e idades.</p>
              <AnimatedButton backgroundColor="white" textColor="tertiary" text="Saiba mais" link='/sobre' />
            </div>
          </div>
        </div>
      </section>


      <div className="px-10 pt-10 pb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Últimos Blogs</h2>
        <BlogList count={3} />
      </div>

      <div className="bg-white px-10">
        <EventsList past={false} workshop={false} />
      </div>

      <div className="px-10">
        <EventsList past={true} workshop={false} count={2} />
      </div>

      <div className="mb-12 px-4 ">
            <h2 className="text-4xl font-bold mb-6 text-center">Localização</h2>
            <div className="bg-primary p-4 rounded-lg h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5115468391823!2d-9.145204499999998!3d38.72902200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339e043d79b3%3A0x210a53b86930acbc!2sR.%20Andrade%20Corvo%209%2C%201050-007%20Lisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spe!4v1727890217750!5m2!1spt-PT!2spe&zoom=30"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


      <SecondFooter title='Pronto para começar a tua jornada de ukulele?' link='/contactos' description='Estás preparado para explorar o mundo do ukulele e partilhar momentos únicos de música e convívio? Entra em contacto connosco e descobre como começar a tua aventura musical hoje mesmo!' />
    </>
  )
}