import React from 'react'
import { Brain, Music, Focus, HandMetal, Smile, Users, Lightbulb, Award, Book, Heart, Clock } from 'lucide-react'

type Props = {
  count?: number
}

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

const VantagensCards = ({ count }: Props) => {
  const cards = benefits.slice(0, count || benefits.length)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((benefit, index) => (
        <div key={index} className="bg-primary-foreground rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center mb-4">
            <benefit.icon className="w-8 h-8 text-tertiary mr-3" />
            <h3 className="text-xl font-bold">{benefit.title}</h3>
          </div>
          <p className="text-secondary">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}

export default VantagensCards