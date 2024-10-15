import UpperSection from '@/components/UpperSection'
import Image from 'next/image'

const ukuleleHistory = {
  title: "História do Ukulele",
  intro: "O ukulele tem sua origem no século XIX tendo como ancestrais a Braguinha ou Machete e o Rajão, instrumentos levados pelos madeirenses, quando estes emigraram para o Havaí para trabalhar no cultivo da cana-de-açúcar. Por sua vez a braguinha ou Machete é um descendente do Cavaquinho Português. Sim, a origem deste instrumento musical é Portuguesa!",
  meaning: {
    title: "O Significado de Ukulele",
    content: [
      'Existem várias teorias sobre o significado de Ukulele e a mais conhecida é "Pulga Saltitante" e isto porque Uku significa "pulga" e lele significa "saltitante" no idioma Havaino. Este nome deve ter surgido por causa do movimento rápido das mãos de quem tocava o instrumento.',
      `Outra interpretação possível é "Presente que veio de longe" e isto porque Uku também significa "presente" e lele "vir". Quando o Rei David Kal'kaua conheceu este instrumento ficou apaixonado por ele e mandou construir um para oferecer à sua irmã Lili'uokalani. Assim este significado refere-se à prenda que a rainha Lili'uokalani recebeu do seu irmão. O Rei David Kal'kaua foi um dos que estimulou que este instrumento musical fizesse parte da dança Hula, tradicional na sua terra.`,
    ]
  },
  arrival: {
    title: "A Chegada ao Havaí",
    content: [
      "O barco à vela que transportou os imigrantes portugueses, provenientes da Ilha da Madeira, chamava-se SS Ravenscrag e chegou a Honolulu na tarde de 23 de Agosto de 1879, com cerca de 400 imigrantes a bordo.",
      "Entre eles encontravam-se nomes ligados à história do Ukulele: Dois tocadores (João Fernandes e José Luís Correia) e três construtores (Manuel Nunes, Augusto Dias e José Espírito Santo).",
      "João Fernandes, então com 25 anos, para celebrar o fim da viagem de 4 meses e 15.000 milhas, pegou na versão madeirense do cavaquinho, a braguinha do seu amigo Manuel Nunes, pulou do navio e começou a tocar modinhas típicas da sua terra natal. Mais tarde formou um conjunto musical com José Luís Correia e Augusto Dias que também tocava Braguinha e passaram a participar em festas e serenatas locais."
    ]
  },
  development: {
    title: "O Desenvolvimento do Ukulele",
    content: [
      "Manuel Nunes abriu a sua oficina no Havai no ano 1884 e Augusto Dias e José Espírito Santos um pouco mais tarde no ano 1888. Estes três violeiros passaram a utilizar as madeiras locais de Koa construindo instrumentos de muito boa qualidade.",
      "A Gazeta Havaiana dizia na época: «uma banda de portugueses, composta por insulares da Madeira, chegou aqui recentemente e tem deliciado as pessoas com concertos noturnos pelas ruas. Os músicos são verdadeiros artistas com os seus estranhos instrumentos, os quais são um tipo de mistura entre uma viola e um banjo, mas que produzem uma música muito doce nas mãos dos trovadores portugueses.»"
    ]
  },
  popularization: {
    title: "A Popularização do Ukulele",
    content: [
      "Além de ser utilizado na música tradicional Havaiana, o ukulele foi bastante utilizado na música popular Americana após a sua apresentação em público na Exposição Internacional Panamá-Pacífico em 1915. O Havai tinha passado então a ser um dos Estados dos Estados Unidos da América.",
      "Só agora mais recentemente este instrumento passou a ser usado em várias partes do mundo nomeadamente na Europa e é um dos instrumentos musicais que regista o maior crescimento em vendas, tendo surgido imensas marcas."
    ]
  }
}

export default function HistoriaDoUkulele() {
  return (
    <div className='pt-24 md:pt-0'>
    <UpperSection title={ukuleleHistory.title} imgLocation='/ukulele/ukulele3.webp' />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container flex flex-col items-center mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="mb-6 text-lg leading-relaxed text-justify">{ukuleleHistory.intro}</p>

            <div className="px-8 mb-8">
              <Image
                src="/historia/ancientUkes.png"
                alt="Traditional Portuguese instruments"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-secondary mt-2 text-center">Braguinha, Rajão e Machete - ancestrais do Ukulele</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">{ukuleleHistory.meaning.title}</h2>
            {ukuleleHistory.meaning.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-justify">{paragraph}</p>
            ))}

            <h2 className="text-2xl font-bold mb-4">{ukuleleHistory.arrival.title}</h2>
            {ukuleleHistory.arrival.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-justify">{paragraph}</p>
            ))}

            <div className="px-8 mb-8">
              <Image
                src="/historia/ancientHawaiiPlayers.jpg"
                alt="Early ukulele players in Hawaii"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-secondary mt-2 text-center">Primeiros tocadores de Ukulele no Havaí</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">{ukuleleHistory.development.title}</h2>
            {ukuleleHistory.development.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-justify">{paragraph}</p>
            ))}

            <h2 className="text-2xl font-bold mb-4">{ukuleleHistory.popularization.title}</h2>
            {ukuleleHistory.popularization.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-justify">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}