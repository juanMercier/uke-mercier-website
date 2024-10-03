import Image from 'next/image'
import { Music, Users, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import UpperSection from '@/components/UpperSection'

const aboutContent = {
  school: {
    title: "A UkeMercier",
    intro: "A UkeMercier surgiu da amizade, do gosto pela música, assim como pelo gosto em aprender e ensinar. Esta combinação especial é o que nos une e motiva.",
    sections: [
      {
        title: "Alegria nas Aulas",
        content: "Cada aula é uma celebração da música e da camaradagem. Acreditamos que a música deve ser uma experiência alegre e envolvente, e isso reflete-se em cada aula. Rimos, aprendemos e tocamos juntos, criando boas memórias e num ambiente onde todos se sentem à vontade para aprender e crescer musicalmente.",
        icon: Music
      },
      {
        title: "Diversidade de Canções",
        content: "O nosso repertório é já vasto e variado, abrangendo diferentes estilos e géneros musicais. Cada aula oferece a oportunidade de explorar novas melodias e ritmos. Isso não só enriquece o conhecimento musical dos alunos, mas também mantém as aulas interessantes e dinâmicas.",
        icon: Star
      },
      {
        title: "Concertos e Encontros Musicais",
        content: "Além das aulas, temos o prazer de compartilhar a nossa música com a comunidade. Já realizámos concertos em lares e centros de dia, levando alegria e entretenimento a muitos. Também promovemos encontros musicais em vários jardins da cidade de Lisboa, criando momentos mágicos ao ar livre para todos desfrutarem.",
        icon: Users
      }
    ],
    cta: "Junta-te a Nós!",
    ctaContent: "Se desejas integrar estas divertidas aulas de ukulele, basta contatar-me. Estamos sempre de braços abertos para novos membros que queiram compartilhar da nossa paixão pela música e pela alegria."
  },
  professor: {
    title: "O Professor",
    name: "Carlos Mercier",
    content: [
      "A minha paixão pela música e o gosto em tocar vários instrumentos musicais vêm desde muito cedo. Este interesse também foi alimentado na sequência de assistir aos ensaios da banda do meu irmão mais velho, dias esses que eram muito alegres e estimulantes. Sempre que podia brincava com alguns instrumentos musicais, nomeadamente um teclado de marca Farfisa (duplo teclado), com imensos efeitos de som. Por esta altura, este era o instrumento musical que eu sonhava um dia saber tocar.",
      "Mais tarde, enquanto adolescente, comecei a interessar-me muito pela guitarra e a explorá-la como autodidata, mas também com aulas de guitarra clássica. Para além de tocar guitarra clássica, obviamente também usava a guitarra para tocar os temas da época, das minhas bandas preferidas e também para compor temas próprios. Em dois anos consecutivos concorri ao Festival da Canção RTP, recordação que guardo até hoje como muito carinho pelo sonho então vivido.",
      "O gosto pela música e o interesse em tocar vários instrumentos musicais manteve-se até hoje, tendo tido ao longo do tempo aulas de piano, guitarra elétrica, cavaquinho, viola amarantina e gaita de foles. Na sequência do curso de cavaquinho e durante cerca de 12 anos, integrei um Grupo de Cordofones Portugueses de raiz tradicional onde tocava viola amarantina, cavaquinho e guitarra, até que, a certa altura, fui nomeado pelo maestro como coordenador técnico e neste papel, na ausência do maestro orientava o grupo nos ensaios e também fazia alguns arranjos musicais.",
      "Faço parte de duas bandas de covers como guitarrista, ukulelista e vocalista e tive o prazer de tocar no MEO Arena para mais de 6000 pessoas com um dos projectos.",
      "Em janeiro de 2018, uma amiga disse-me que gostava muito de aprender a tocar um instrumento musical e eu, que estava como autodidata a aprender a tocar Ukulele, disse-lhe que poderia ensiná-la. Aos poucos foram-se juntando mais amigos e às tantas já eram 8 pessoas a aprender a tocar Ukulele.",
      "O sucesso foi tão grande que acabou por se expandir para o Clube da minha Empresa (MEO) onde passei a dar aulas de ukulele com muito entusiasmo e dedicação, tendo até este momento ensinado mais de 50 alunos sempre num ambiente descontraído, alegre e divertido, cultivando assim o gosto pelo instrumento e pela música.",
      "Embora a minha formação superior seja em Informática, a música é algo muito importante para mim e como gosto muito de ensinar, sinto-me completamente preparado para as aulas de Ukulele."
    ]
  },
  quote: {
    text: "A música é celeste, de natureza divina e de tal beleza que encanta a alma e a eleva acima da sua condição",
    author: "Aristóteles"
  }
}

export default function About() {
  return (
    <div className='pt-24 md:pt-0'>
    <UpperSection title='Sobre nós' imgLocation='/group/classPhoto.jpg' />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{aboutContent.school.title}</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-center">{aboutContent.school.intro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {aboutContent.school.sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <section.icon className="w-12 h-12 text-tertiary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r bg-tertiary text-white p-8 rounded-lg mb-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center">{aboutContent.school.cta}</h3>
            <p className="text-xl text-center mb-8">{aboutContent.school.ctaContent}</p>
            <div className="flex justify-center">
              <Link href="/contactos" className="bg-white text-tertiary hover:bg-gray-100 font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors text-lg">
                Contacte-nos Hoje <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{aboutContent.professor.title}</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <div className="relative px-10">
                <Image
                  src="/perfil/perfilVertical.jpg"
                  alt="Professor Carlos Mercier"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-tertiary text-white py-2 px-4 rounded-b-lg">
                  <h3 className="text-xl font-bold text-center">{aboutContent.professor.name}</h3>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              {aboutContent.professor.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed text-justify">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
        <div className="container mx-auto px-4">
          <blockquote className="text-2xl sm:text-3xl italic text-center max-w-3xl mx-auto">
            "{aboutContent.quote.text}"
            <footer className="mt-6 text-xl">— {aboutContent.quote.author}</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}