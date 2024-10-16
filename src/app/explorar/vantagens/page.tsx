import Image from 'next/image'
import { Brain, Music, Focus, HandMetal, Smile, Users, Lightbulb, Award, Book, Heart, Clock } from 'lucide-react'
import VantagensCards from '@/components/VantagensCards'
import SecondFooter from '@/components/SecondFooter'
import UpperSection from '@/components/UpperSection'

const benefits = [
  { title: "Melhoria da Memória", description: "Tocar ukulele estimula o cérebro e pode aumentar a capacidade de memória. Estudos demonstram que tanto ouvir música como tocar um instrumento ajudam a fortalecer a memória de longo prazo.", icon: Brain },
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
      <UpperSection imgLocation='/group/groupPhotoPark.jpg' title='Vantagens de Tocar' />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Aprender a tocar um instrumento musical, como o ukulele, oferece uma série de benefícios cognitivos, emocionais e sociais. Descubra como o ukulele pode enriquecer a sua vida
          </p>

              <VantagensCards />

        </div>
      </section>

      <SecondFooter title='Pronto para começar a tua jornada de ukulele?' link='/contactos' description='Estás preparado para explorar o mundo do ukulele e partilhar momentos únicos de música e convívio? Entra em contacto connosco e descobre como começar a tua aventura musical hoje mesmo!' />

    </div>
  )
}