import { Music, Star, Users } from 'lucide-react'
import Image from 'next/image'

export default function Sobre() {
  return (<>
    <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
      <Image
        src="/classPhoto.jpg"
        alt="Ukulele class in session"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Sobre UkeMercier</h1>
    </section>

    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/PerfilPhoto.jpg"
              alt="Carlos Mercier"
              width={600}
              height={600}
              className="rounded-full w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Conhece o professor: Carlos Mercier</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Carlos Mercier é um professor de ukulele apaixonado, baseado em Lisboa, Portugal. Com mais de 10 anos de experiência como professor, Carlos ajudou alunos de todas as idades a descobrir a alegria de tocar música. Seu estilo de ensino único foca em tornar a aprendizagem divertida, acessível e livre de stress.
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Na UkeMercier, nossa missão é inspirar o amor pela música através do ukulele. Acreditamos no poder da comunidade, da criatividade e da expressão. Nossas aulas são projetadas para serem envolventes, acolhedoras e adaptadas às necessidades de cada aluno.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Porquê escolher UkeMercier?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <Music className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Aulas Especializadas</h3>
            <p className="text-gray-600 text-sm sm:text-base">Aprende com o experiente professor e descubra a alegria de tocar ukulele.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Comunidade Vibrante</h3>
            <p className="text-gray-600 text-sm sm:text-base">Junta-te à nossa comunidade de entusiastas de ukulele e faz amigos na tua jornada musical.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <Star className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Recursos Compreensivos</h3>
            <p className="text-gray-600 text-sm sm:text-base">Acede a uma vasta gama de materiais de aprendizagem, incluindo a nossa ferramenta de leitura de cifras e publicações informativas no blog</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Join the UkeMercier Family Today!</h2>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a complete beginner or looking to improve your skills, we have the perfect class for you. Start your ukulele journey with UkeMercier and discover the joy of making music.
        </p>
        <a href="/contact" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center transition-colors text-sm sm:text-base">
          Get Started Now
        </a>
      </div>
    </section>
  </>)
}