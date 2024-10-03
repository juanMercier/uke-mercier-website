import Image from 'next/image'
import Link from 'next/link'
import { Book, Star, Music, Sliders, FileText, Video, ArrowRight } from 'lucide-react'
import UpperSection from '@/components/UpperSection'

const resources = [
  {
    title: "História do Ukulele",
    description: "Descubra a fascinante jornada do ukulele, desde suas origens nas ilhas havaianas até se tornar um instrumento amado globalmente.",
    icon: Book,
    link: "/recursos/historia-do-ukulele"
  },
  {
    title: "Vantagens de Tocar Ukulele",
    description: "Explore os benefícios cognitivos, emocionais e sociais de aprender a tocar ukulele.",
    icon: Star,
    link: "/recursos/vantagens"
  },
  {
    title: "Tipos de Ukuleles",
    description: "Conheça os diferentes tipos de ukuleles: soprano, concerto, tenor e barítono.",
    icon: Music,
    link: "/recursos/tipos-de-ukuleles"
  },
  {
    title: "Afinação do Ukulele",
    description: "Aprenda como afinar seu ukulele corretamente, com ou sem um afinador cromático.",
    icon: Sliders,
    link: "/recursos/afinacao"
  },
  {
    title: "Cifra Reader",
    description: "Use nossa ferramenta interativa para ler e praticar cifras de ukulele.",
    icon: FileText,
    link: "/recursos/cifra-reader"
  },
  {
    title: "Vídeos",
    description: "Assista a tutoriais e performances de ukulele para aprimorar suas habilidades.",
    icon: Video,
    link: "/recursos/videos"
  }
]

export default function Recursos() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/recursos/backgroundMain.jpg' title='Recursos' />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <resource.icon className="w-12 h-12 text-tertiary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Link href={resource.link} className="text-tertiary hover:text-tertiary-hover font-semibold flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore Nossos Recursos</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nossos recursos abrangentes ajudarão você a aprender, praticar e aperfeiçoar suas habilidades no ukulele. Seja você um iniciante ou um músico experiente, temos algo para todos.
          </p>
          <Link href="/contactos" className="bg-white hover:bg-gray-100 text-tertiary font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors">
            Comece Sua Jornada no Ukulele <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}