import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Book, Calendar } from 'lucide-react'
import UpcomingEvents from '@/components/UpcomingEvents'
import LatestBlogPosts from '@/components/LatestBlogPosts'

export default function Home() {
  return (
    <>
      <section className="hidden relative h-screen sm:flex items-center justify-center">
        <Image
          src="/UkuleleDeitado.jpg"
          alt="Ukulele on a beautiful beach"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Aprende, Toca e Aproveita Ukulele em Lisboa</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Junta-te a UkeMercier para uma jornada inesquecível</p>
          <Link href="/contactos" className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Começa a Aprender <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <section className="relative h-screen flex sm:hidden items-center justify-center">
        <Image
          src="/verticalUke.jpg"
          alt="Ukulele on a beautiful beach"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Aprende Ukulele em Lisboa</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Junta-te a UkeMercier para uma jornada inesquecível</p>
          <Link href="/contactos" className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Começa a Aprender <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Bem-vindo a UkeMercier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link href='/sobre' className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <Music className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary hover:text-tertiary-hover mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Aulas Especializadas</h3>
              <p className="text-secondary text-sm sm:text-base">Aprende com o experiente professor Carlos Mercier e descubra a alegria de tocar ukulele.</p>
            </Link>
            <Link href='/recursos' className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <Book className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary hover:text-tertiary-hover mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Recursos Compreensivos</h3>
              <p className="text-secondary text-sm sm:text-base">Acede à nossa ferramenta de leitura de cifras e blog de música para melhorar a sua experiência.</p>
            </Link>
            <Link href='/eventos' className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary hover:text-tertiary-hover mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Eventos da Comunidade</h3>
              <p className="text-secondary text-sm sm:text-base">Junta-te aos nossos eventos UkeInParque e conecta-te com outros entusiastas de ukulele.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/perfilInParque.jpg"
                alt="Carlos Mercier teaching"
                width={200}
                height={200}
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 lg:pl-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Conhece o professor: Carlos Mercier</h2>
              <p className="text-secondary mb-4 sm:mb-6 text-sm sm:text-base">Carlos Mercier é um apaixonado professor de ukulele com mais de 10 anos de experiência. O seu estilo de ensino único concentra-se em tornar a aprendizem divertida, acessível e livre de stress para alunos de todos os níveis e idades.</p>
              <Link href="/sobre" className="text-tertiary hover:text-tertiary-hover font-bold inline-flex items-center text-sm sm:text-base">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UpcomingEvents />
      <LatestBlogPosts />

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Pronto para começar a tua jornada de ukulele?</h2>
          <Link href="/contactos" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
            Contacta-nos hoje <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}