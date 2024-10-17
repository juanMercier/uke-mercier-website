import Image from 'next/image'
import Link from 'next/link'
import { Book, Star, Music, Sliders, FileText, Video, ArrowRight } from 'lucide-react'
import UpperSection from '@/components/UpperSection'
import SecondFooter from '@/components/SecondFooter'

const resources = [
  {
    title: "História do Ukulele",
    description: "Descubra a fascinante jornada do ukulele, desde suas origens nas ilhas havaianas até se tornar um instrumento amado globalmente.",
    icon: Book,
    link: "/explorar/historia-do-ukulele"
  },
  {
    title: "Vantagens de Tocar Ukulele",
    description: "Explore os benefícios cognitivos, emocionais e sociais de aprender a tocar ukulele.",
    icon: Star,
    link: "/explorar/vantagens"
  },
  {
    title: "Tipos de Ukuleles",
    description: "Conheça os diferentes tipos de ukuleles: soprano, concerto, tenor e barítono.",
    icon: Music,
    link: "/explorar/tipos-de-ukulele"
  },
  {
    title: "Afinação do Ukulele",
    description: "Aprenda como afinar seu ukulele corretamente, com ou sem um afinador cromático.",
    icon: Sliders,
    link: "/explorar/afinacao"
  },
  {
    title: "Leitor de Cifras",
    description: "Use nossa ferramenta interativa para ler e praticar cifras de ukulele.",
    icon: FileText,
    link: "/explorar/leitor-de-cifras"
  },
  {
    title: "Vídeos",
    description: "Assista a tutoriais e performances de ukulele para aprimorar suas habilidades.",
    icon: Video,
    link: "/explorar/videos"
  }
]

export default function Explorar() {
  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection imgLocation='/explorar/backgroundMain.jpg' title='Explorar' />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link href={resource.link} key={index} className="bg-primary-foreground rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <resource.icon className="w-12 h-12 text-tertiary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
                  <p className="text-secondary text-lg mb-6">{resource.description}</p>
                  {/* <Link href={resource.link} className="text-tertiary hover:text-tertiary-hover font-semibold flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SecondFooter
        title='Explora os nossos Recursos'
        link='/contactos'
        description='Nossos recursos abrangentes ajudarão você a aprender, praticar e aperfeiçoar suas habilidades no ukulele. Seja você um iniciante ou um músico experiente, temos algo para todos'
      />

    </div>
  )
}