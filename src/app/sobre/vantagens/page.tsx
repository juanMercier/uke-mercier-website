import Image from 'next/image'
import { Brain, Music, Focus, HandMetal, Smile, Users, Lightbulb, Award, Book, Heart, Clock } from 'lucide-react'

const benefits = [
  { title: "Melhora da Memória", description: "Tocar ukulele estimula o cérebro e pode aumentar a capacidade de memória. Estudos demonstram que tanto ouvir música como tocar um instrumento ajudam a fortalecer a memória de longo prazo.", icon: Brain },
  { title: "Desenvolvimento Cognitivo", description: "A prática musical envolve várias áreas do cérebro, como as habilidades motoras, a capacidade auditiva e a memória. Tocar ukulele contribui para um aumento da atividade cerebral, promovendo o desenvolvimento cognitivo.", icon: Music },
  { title: "Concentração e Foco", description: "Aprender a tocar ukulele exige atenção e foco, competências que podem ser aplicadas noutras áreas da vida, como os estudos e o trabalho. A prática regular ajuda a melhorar a capacidade de concentração.", icon: Focus },
  { title: "Coordenação Motora", description: "Tocar ukulele envolve o uso de ambas as mãos, melhorando a coordenação motora e a destreza manual. Isto é especialmente útil em atividades que requerem precisão e controlo.", icon: HandMetal },
  { title: "Redução do Stress", description: "O som suave e relaxante do ukulele pode ajudar a reduzir o stress e a ansiedade. Tocar este instrumento oferece uma forma de relaxamento e promove o bem-estar emocional.", icon: Smile },
  { title: "Competências Sociais", description: "Tocar ukulele em grupo ou em bandas facilita a interação social e promove o trabalho em equipa. Participar em atividades musicais coletivas ajuda no desenvolvimento de competências sociais e na criação de laços interpessoais.", icon: Users },
  { title: "Estímulo à Criatividade", description: "A prática de um instrumento como o ukulele incentiva a criatividade e a improvisação, permitindo explorar novas ideias e sonoridades musicais.", icon: Lightbulb },
  { title: "Aumento da Autoconfiança", description: "Dominar uma nova habilidade, como tocar ukulele, proporciona uma sensação de conquista e aumento da autoconfiança. Com o tempo, as pessoas sentem-se mais seguras para atuar em público e partilhar a sua música.", icon: Award },
  { title: "Facilidade de Aprendizagem", description: "O ukulele é um dos instrumentos mais fáceis de aprender, especialmente para principiantes. O seu tamanho compacto e a simplicidade dos acordes tornam o processo de aprendizagem acessível, proporcionando uma sensação rápida de progresso.", icon: Book },
  { title: "Bem-Estar Emocional", description: "A prática musical tem efeitos comprovados na regulação das emoções. Tocar ukulele ajuda a expressar sentimentos de forma criativa, proporcionando uma válvula de escape emocional.", icon: Heart },
  { title: "Promoção da Disciplina e Paciência", description: "Aprender qualquer instrumento exige prática constante, e o ukulele não é exceção. A disciplina necessária para melhorar gradualmente no instrumento ensina paciência e persistência, qualidades importantes em muitas áreas da vida.", icon: Clock },
]

export default function Benefits() {
  return (
    <div className='pt-24 md:pt-0'>
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Ukulele on a colorful background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary to-tertiary-light opacity-75" />
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Benefícios de Tocar Ukulele</h1>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Aprender a tocar um instrumento musical, como o ukulele, oferece uma série de benefícios cognitivos, emocionais e sociais. Descubra como o ukulele pode enriquecer a sua vida:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex items-center mb-4">
                  <benefit.icon className="w-8 h-8 text-tertiary mr-3" />
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Comece a Sua Jornada Musical</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Estes benefícios mostram que tocar ukulele não só enriquece a vida musicalmente, como também contribui para o crescimento pessoal, emocional e cognitivo. Não espere mais para começar a sua aventura com o ukulele!
          </p>
          <div className="text-center">
            <a href="/contactos" className="bg-white hover:bg-tertiary-dark text-tertiary hover:bg-tertiary-hover font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors text-lg">
              Agende Sua Primeira Aula
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}